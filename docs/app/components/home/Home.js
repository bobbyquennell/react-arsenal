import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-arsenal/Button';
import style from './style.scss';
const Home = function() {
  const clickHandler =()=>{console.log("haha");};
  return (
    <div>
      <head className={style.head}>
        <nav className={style.nav}>
          <Link className={style.navitem} to="/">Docs</Link>
          <Link className={style.navitem} to="/">Blog</Link>
          <Link className={style.navitem} to="/">Github</Link>
        </nav>
      </head>
      <h2>this is not a home page</h2>
      <Link to="/about">About</Link>
      <br/>
      <br/>
    </div>
  );
};

export default Home;
