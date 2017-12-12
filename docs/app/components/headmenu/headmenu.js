import React from 'react';
import PropTypes from 'prop-types';
import style from './headmenu.scss';

const HeadMenu = ({toggle})=>{
  return (
    <div>
      {
        toggle ?(
          <div className={style.headmenu}>
            <div className={style.menuitem}><a href="#" alt="menu item">Docs</a></div>
            <div className={style.menuitem}><a href="#" alt="menu item">Blog</a></div>
            <div className={style.menuitem}><a href="#" alt="menu item">Github</a></div>
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
