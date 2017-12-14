import React from 'react';
import PropTypes from 'prop-types';

const SideMenu = ({components}) => {
  return (
    <ul className="sidememu">
      {
        components.map( name=>{
          return (
            <li key={name}>
              <a href={`#${name}`}>{name}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

SideMenu.propTypes = {
  components: PropTypes.array.isRequired
};

export default SideMenu;
