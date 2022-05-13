import axios from 'axios';

// const API_KEY = "25704101-e9a4b1030f151f3422020504c";
// const BASE_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

const fetchData = ({ query = '', page = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=25704101-e9a4b1030f151f3422020504c&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export default { fetchData };
