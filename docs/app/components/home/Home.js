import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-arsenal/Button';
import style from './style.scss';
const Home = function() {
  const clickHandler =()=>{console.log("haha");};
  return (
    <div className={style.root}>
      <div className={style.headblock}>
        <div className={style.head}>
          <img className={style.icon} src="../../../../favicon.ico" alt=""/>
          <nav className={style.nav}>
            <Link className={style.navitem} to="/">Docs</Link>
            <Link className={style.navitem} to="/">Blog</Link>
            <a className={style.navitem} href="https://github.com/bobbyquennell/react-arsenal">Github</a>
          </nav>
          <div className={style.burger}>
            <div className={style.burgerbar}/>
            <div className={style.burgerbar}/>
            <div className={style.burgerbar}/>
          </div>
        </div>
      </div>
      <div className={style.maincontent} >
        <div className={style.hero}>
          <h2>React Arsenal</h2>
          <p>React Arsenal is a set of React components that implements Google Material Design specification. It's built on top of some the trendiest proposals like CSS Modules (written in SASS), Webpack and ES6. The library harmoniously integrates with your Webpack workflow and it's easily customizable and very flexible.
Check our awesome documentation (which is built using React Toolbox) and try all the components with live examples. We've created a playground so you don't need to install anything to fall in love with our components, so fun!</p>
          <br/>
          <br/>
        </div>
      </div>
      <div className={style.footerblock}>
        <div className={style.footer}>
          <p>React Arsenal@2017</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
