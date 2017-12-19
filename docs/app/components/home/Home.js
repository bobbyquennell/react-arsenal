import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-arsenal/Button';
import style from './style.scss';
import Navigation from '../navigation/navigation';
import Burger from '../burger/burger';
import Footer from '../footer/footer';
import HeadMenu from '../headmenu/headmenu';
import Header from '../header/header';
import Icon from '../icon/icon';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle: false
    };
  }
  clickHandler =()=>{
    this.setState((prevState)=>{
      return {
        toggle:!prevState.toggle
      };
    });
  }
  render(){
    return (
      <div className={style.root}>
        <HeadMenu toggle={this.state.toggle}/>
        <Header>
          <Icon/>
          <Navigation/>
          <Burger toggleHeadMenu={this.clickHandler}/>
        </Header>
        <HeadMenu toggle={this.state.toggle}/>
        <div className={style.maincontent} >
          <div className={style.hero}>
            <h2>React Arsenal</h2>
            <p>React Arsenal is a set of React components that implements Google Material Design specification. It's built on top of some the trendiest proposals like CSS Modules (written in SASS), Webpack and ES6. The library harmoniously integrates with your Webpack workflow and it's easily customizable and very flexible.
  Check our awesome documentation (which is built using React Toolbox) and try all the components with live examples. We've created a playground so you don't need to install anything to fall in love with our components, so fun!</p>
            <br/>
            <br/>
          </div>
          <div className={style.hero}>
            <h2>React Arsenal</h2>
            <p>React Arsenal is a set of React components that implements Google Material Design specification. It's built on top of some the trendiest proposals like CSS Modules (written in SASS), Webpack and ES6. The library harmoniously integrates with your Webpack workflow and it's easily customizable and very flexible.
  Check our awesome documentation (which is built using React Toolbox) and try all the components with live examples. We've created a playground so you don't need to install anything to fall in love with our components, so fun!</p>
            <br/>
            <br/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

}

export default Home;
