import  React from 'react';
import style from './navigation.scss';
import {Link} from 'react-router-dom';

const Navigation =()=>{
  return (
    <nav className={style.nav}>
      <Link className={style.navitem} to="/">Docs</Link>
      <Link className={style.navitem} to="/">Blog</Link>
      <a className={style.navitem} href="https://github.com/bobbyquennell/react-arsenal">Github</a>
    </nav>
  );
};

export default Navigation;
