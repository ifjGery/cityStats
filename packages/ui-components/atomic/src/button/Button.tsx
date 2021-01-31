import React from 'react';
import PropTypes from 'prop-types';

import style from './button.less';

const Button : React.FunctionComponent<any> = ({ children }) => (
  <button className={style.button} type="button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
