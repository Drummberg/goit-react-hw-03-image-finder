import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import { SearchbarHead } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHead>
      <SearchForm onSubmit={onSubmit} />
    </SearchbarHead>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
