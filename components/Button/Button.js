
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';
import classnames from 'classnames';

/** A resuable Button component support customized styling */
const Button = ({className, name, onClick, disabled})=>{
  return(
    <button className={classnames({
      [styles.root]: true,
      [className]: className
    })} onClick={onClick} disabled={disabled}>{name}</button>
  );
};

Button.propTypes = {
  /** your own style classnames */
  className: PropTypes.string,
  /** name of your button */
  name: PropTypes.string.isRequired,
  /** Click event handler */
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  name: "Click Me"
};
export default Button;
