import PulseLoader from 'react-spinners/PulseLoader';
import PropTypes from 'prop-types';

const wrapperStyles = {
  margin: 0,
};

const Loader = ({ enabled }) => {
  return (
    <div css={wrapperStyles}>
      <PulseLoader margin={4} size={13} color={'#3f51b5'} enabled={enabled} />
    </div>
  );
};

Loader.propTypes = {
  enabled: PropTypes.bool.isRequired,
};

export default Loader;
