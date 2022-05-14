import PulseLoader from 'react-spinners/PulseLoader';

const wrapperStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
};

const Loader = () => {
  return (
    <div css={wrapperStyles}>
      <PulseLoader margin={4} size={13} color={'#3f51b5'} />
    </div>
  );
};

export default Loader;
