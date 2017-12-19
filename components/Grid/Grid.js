import React from 'react';
import style from 'Grid.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
* The container for CSS3 flexbox display modules
 */
const Grid = ({className, container, item, children, ...restProps})=>{
  return(
    <div {...restProps}
      className={classnames({
        [className]: className,
        [style.item]: item,
        [style.container]: container,
      })}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  /**
   * the container flag, true: flexbox container.
   */
  container: PropTypes.bool,
  /**
   * the item flag, true: flexbox item.
   */
  item: PropTypes.bool,
  /** the content of the component*/
  children: PropTypes.node.isRequired
};

// Grid.defaultProps = {
//   container: true,
//   item: false
// };
export default Grid;
