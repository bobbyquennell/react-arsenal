import React from 'react';
import style from './Grid.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
* The container for CSS3 flexbox display modules
 */
const Grid = (props)=>{
  const {
    className: classNameProp,
    container,
    direction,
    justify,
    alignItems,
    item,
    children,
    ...otherProps
  } = props;

  const className = classnames(
    {
      [style.container]: container,
      [style.item]: item,
      [style.row]: direction == Grid.defaultProps.direction,
      [style.rowreverse]: direction == 'row-reverse',
      [style.justifystart]: justify == 'flex-start',
      [style.justifyend]: justify == 'flex-end',
      [style.justifycenter]: justify == 'center',
      [style.justifyaround]: justify == 'space-around',
      [style.justifybetween]: justify == 'space-between',
      [style.alignitemstart]: alignItems == 'flex-start',
      [style.alignitemend]: alignItems == 'flex-end',
      [style.alignitemcenter]: alignItems == 'center',
      [style.alignitembaseline]: alignItems == 'baseline',
      [style.alignitemstretch]: alignItems == 'stretch',

    },
    classNameProp
  );
  const gridProps = { className, ...otherProps };
  return(
    <div {...gridProps}>
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
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   'row', 'row-reverse', 'column', 'column-reverse'
   */
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  /**
   * the item flag, true: flexbox item.
   */
  item: PropTypes.bool,
  /**
   * Defines the 'justify-content' property for a flexbox container.
   'flex-start', 'center', 'flex-end', 'space-between', 'space-around'
   */
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  /**
   * Defines the 'align-items' property for a flexbox container.
   'flex-start', 'center', 'flex-end', 'baseline', 'stretch'
   */
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
  /** the content of the component*/
  children: PropTypes.node.isRequired
};

Grid.defaultProps = {
  container: true,
  direction: 'row',
  justify: 'flex-start',
  alignItems: 'stretch',
  //alignContent: 'stretch',
  item: false
};
export default Grid;
