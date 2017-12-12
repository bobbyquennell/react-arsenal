import  React from 'react';
import style from './navigation.scss';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Navigation =({className})=>{
  return (
    <nav className={classnames({
      [style.nav]:true,
      [className]: className})}>
      <Link className={style.navitem} to="/">Docs</Link>
      <Link className={style.navitem} to="/">Blog</Link>
      <a className={style.navitem} href="https://github.com/bobbyquennell/react-arsenal">Github</a>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string
};

export default Navigation;
