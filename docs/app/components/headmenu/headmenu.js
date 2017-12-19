import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import style from './headmenu.scss';

const HeadMenu = ({toggle})=>{
  return (
    <div>
      {
        toggle ?(
          <div className={style.headmenu}>
            <div className={style.menuitem}><Link to="/Docs">
              Docs
            </Link></div>
            <div className={style.menuitem}><Link to="/">
              Blog
            </Link></div>
            <div className={style.menuitem}><Link to="/">
              Github
            </Link></div>
          </div>):(<div/>)
      }
    </div>
  );
};
HeadMenu.propTypes = {
  toggle: PropTypes.bool
};
HeadMenu.defaultProps = {
  toggle: false
};
export default HeadMenu;
