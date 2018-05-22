import React from 'react';
import {Link} from 'react-router-dom';
import style from './icon.scss';
const Icon = ({className})=>{
  return (
    <div className={className}>
      <Link to="/">
        <img className={style.icon} src="../../../../favicon.ico" alt=""/>
      </Link>
    </div>
  );
};

export default Icon;
