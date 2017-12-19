import React from 'react';
import {Link} from 'react-router-dom';
import style from './icon.scss';
const Icon = ()=>{
  return (
    <Link to="/">
      <img className={style.icon} src="../../../../favicon.ico" alt=""/>
    </Link>
  );
};

export default Icon;