import React from 'react';
import PropTypes from 'prop-types';
import style from './burger.scss';

class Burger extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render(){
    return (
      <div className={style.burger} onClick={this.props.toggleHeadMenu}>
        <div className={style.burgerbar}/>
        <div className={style.burgerbar}/>
        <div className={style.burgerbar}/>
      </div>
    );
  }
}

Burger.propTypes = {
  toggleHeadMenu: PropTypes.func.isRequired,
};

export default Burger;
