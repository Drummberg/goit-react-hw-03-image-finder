import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const Button = ({ children, onClick }) => {
  return (
    <ButtonLoad type="button" onClick={onClick}>
      {children}
    </ButtonLoad>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Button;
