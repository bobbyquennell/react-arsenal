import React from 'react';
import Grid from 'react-arsenal/Grid';
import componentData from '../../../../config/componentData';
import ComponentPage from './componentpage/ComponentPage';
import DocHeader from './docheader/docheader';
import SideMenu from './sidemenu/sidemenu';

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

      <Grid>
        <SideMenu components={componentData.map(x => x.name)}/>
        <Grid direction="column" style={{width: '100%'}}>
          <DocHeader/>
          <ComponentPage component={component} />
        </Grid>         
      </Grid>
    );
  }
}
