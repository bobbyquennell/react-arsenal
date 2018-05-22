import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-arsenal/Grid';
import style from './style.scss';
import classnames from 'classnames';


const SideMenu = ({components}) => {

  const className = classnames(
    style.root,
    {
      [style.sidemenu]: true
    }
  );
  return (
    <Grid className={className} justify="flex-start" direction="column">
      {
        components.map( name =>{
          return (
            <div key={name} className={style.menuitem}>
              <a href={`#${name}`}>{name}</a>
            </div>
          );
        })
      }
    </Grid>

  );
};

SideMenu.propTypes = {
  components: PropTypes.array.isRequired
};

export default SideMenu;
