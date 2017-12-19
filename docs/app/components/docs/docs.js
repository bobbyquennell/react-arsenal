import React from 'react';
import SideMenu from './sidemenu/sidemenu';
import ComponentPage from './componentpage/ComponentPage';
import componentData from '../../../../config/componentData';
import Navigation from '../navigation/navigation';
import Icon from '../icon/icon';
import Header from '../header/header';
import Footer from '../footer/footer';
import Burger from '../burger/burger';
import HeadMenu from '../headmenu/headmenu';
export default class Docs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: window.location.hash.substr(1),
      toggle: false
    };
  }
  componentDidMount() {
    window.addEventListener('hashchange', ()=>{
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  clickHandler =()=>{
    this.setState((prevState)=>{
      return {
        toggle:!prevState.toggle
      };
    });
  }
  render(){
    const {route} = this.state;
    const component = route ? componentData.filter( component => component.name == route)[0]: componentData[0];

    return (
      <div>
        <Header>
          <Icon/>
          <Navigation/>
          <Burger toggleHeadMenu={this.clickHandler}/>
        </Header>
        <HeadMenu toggle={this.state.toggle}/>
        <SideMenu components={componentData.map(component => component.name)}/>
        <ComponentPage component={component} />
        <Footer/>
      </div>
    );
  }
}
