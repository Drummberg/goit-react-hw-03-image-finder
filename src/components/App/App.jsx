import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar';

import { fetchData } from '../../services/imagesApi';
import Loader from '../Loader/Loader';
import Button from '../Button';
import ImageGallery from '../ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    query: '',
    error: null,
    page: 1,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (
      prevState.query !== this.state.query ||
      (prevState.page !== page && page !== 1)
    ) {
      this.fetchImages();
    }
  }

  handleFormSubmit = query => {
    if (query === this.state.query) return;
    this.setState({
      images: [],
      query: query,
      page: 1,
      error: null,
    });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      loading: true,
    }));
  };

  fetchImages = () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    fetchData(query, page)
      .then(({ hits, totalHits }) => {
        const totalPages = Math.ceil(totalHits / 12);

        if (hits.length === 0) {
          return toast.error('Sorry, no images found. Please, try again!');
        }

        if (page === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }

        if (page === totalPages) {
          toast.info("You've reached the end of search results.");
        }

        const data = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return {
            id,
            webformatURL,
            largeImageURL,
            tags,
          };
        });
        this.setState(({ images }) => ({
          images: [...images, ...data],
          total: totalHits,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading, error, total } = this.state;

    const nextImages = images.length !== 0;
    const isLastPage = images.length === total;
    const loadMoreBtn = nextImages && !loading && !isLastPage;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {error && toast.error(error.message)}

        <ImageGallery images={images} />

        {loading && <Loader />}

        {loadMoreBtn && <Button onClick={this.fetchImages}>Load more</Button>}

        <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      </>
    );
  }
}
