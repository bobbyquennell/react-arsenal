import React from 'react';
import style from './header.scss';
import PropTypes from 'prop-types';

const Header = ({children, ...restProps})=>{
  return (
    <div {...restProps} className={style.header}>
      {children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header;
