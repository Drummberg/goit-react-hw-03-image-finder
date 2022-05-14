import PulseLoader from 'react-spinners/PulseLoader';

const wrapperStyles = {
  position: 'absolute',
  top: 0,
  left: '20%',
};

const Loader = () => {
  return (
    <div css={wrapperStyles}>
      <PulseLoader margin={4} size={13} color={'#3f51b5'} />
    </div>
  );
};

export default Loader;
