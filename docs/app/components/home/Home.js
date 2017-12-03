import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-arsenal/Button';
import style from './style.scss';
const Home = function() {
  const clickHandler =()=>{console.log("haha");};
  return (
    <div>
      <article>
        <head className={style.head}>
          <div className={style.nav}>
            <div className={style.navitem}>Docs</div>
            <div className={style.navitem}>Blog</div>
            <div className={style.navitem}>Github</div>
          </div>
        </head>
      </article>
      <h2>this is not a home page</h2>
      <Link to="/about">About</Link>
      <br/>
      <br/>
    </div>
  );
};

export default Home;
