import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Form, Button, Input } from './SearchForm.styled';
import { ImSearch } from 'react-icons/im';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.warn('Please enter a name for the picture or photo!');
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">
          <ImSearch style={{ width: 25, height: 25 }} />
        </Button>
        <Input
          type="text"
          name="query"
          autocomplete="off"
          placeholder="Search images and photos"
          value={query}
          onChange={this.handleNameChange}
        />
      </Form>
    );
  }
}
