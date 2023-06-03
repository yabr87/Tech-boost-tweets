import React from 'react';
// import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

const Button = ({ color, text, onClick }) => {
  return (
    <Btn color={color} onClick={onClick}>
      {text}
    </Btn>
  );
};
// Button.propTypes = {
//   // bla: PropTypes.string,
// };

// Button.defaultProps = {
//   // bla: 'test',
// };

export default Button;
