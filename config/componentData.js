module.exports = [{"name":"Button","description":"A resuable Button component support customized styling","props":{"className":{"type":{"name":"string"},"required":false,"description":"your own style classnames"},"name":{"type":{"name":"string"},"required":false,"description":"name of your button","defaultValue":{"value":"\"Click Me\"","computed":false}},"onClick":{"type":{"name":"func"},"required":true,"description":"Click event handler"}},"code":"\r\nimport React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport styles from './Button.scss';\r\nimport classnames from 'classnames';\r\n\r\n/** A resuable Button component support customized styling */\r\nconst Button = ({className, name, onClick, disabled})=>{\r\n  return(\r\n    <button className={classnames({\r\n      [styles.root]: true,\r\n      [className]: className\r\n    })} onClick={onClick} disabled={disabled}>{name}</button>\r\n  );\r\n};\r\n\r\nButton.propTypes = {\r\n  /** your own style classnames */\r\n  className: PropTypes.string,\r\n  /** name of your button */\r\n  name: PropTypes.string.isRequired,\r\n  /** Click event handler */\r\n  onClick: PropTypes.func.isRequired\r\n};\r\n\r\nButton.defaultProps = {\r\n  name: \"Click Me\"\r\n};\r\nexport default Button;\r\n","examples":[{"name":"ExampleButton","description":"","code":"\r\nimport React from 'react';\r\nimport Button from 'react-arsenal/Button';\r\n\r\n\r\nconst clickHandler = ()=>{\r\n  console.log(\"clicked\");\r\n};\r\nconst ExampleButton = function(){\r\n  return (<Button onClick={clickHandler}/>);\r\n};\r\n\r\nexport default ExampleButton;\r\n"}]},{"name":"Grid","description":"The container for CSS3 flexbox display modules","props":{"container":{"type":{"name":"bool"},"required":false,"description":"the container flag, true: flexbox container.","defaultValue":{"value":"true","computed":false}},"direction":{"type":{"name":"enum","value":[{"value":"'row'","computed":false},{"value":"'row-reverse'","computed":false},{"value":"'column'","computed":false},{"value":"'column-reverse'","computed":false}]},"required":false,"description":"Defines the `flex-direction` style property.\r\nIt is applied for all screen sizes.\r\n   'row', 'row-reverse', 'column', 'column-reverse'","defaultValue":{"value":"'row'","computed":false}},"item":{"type":{"name":"bool"},"required":false,"description":"the item flag, true: flexbox item.","defaultValue":{"value":"false","computed":false}},"justify":{"type":{"name":"enum","value":[{"value":"'flex-start'","computed":false},{"value":"'center'","computed":false},{"value":"'flex-end'","computed":false},{"value":"'space-between'","computed":false},{"value":"'space-around'","computed":false}]},"required":false,"description":"Defines the 'justify-content' property for a flexbox container.\r\n   'flex-start', 'center', 'flex-end', 'space-between', 'space-around'","defaultValue":{"value":"'flex-start'","computed":false}},"children":{"type":{"name":"node"},"required":true,"description":"the content of the component"}},"code":"import React from 'react';\r\nimport style from './Grid.scss';\r\nimport PropTypes from 'prop-types';\r\nimport classnames from 'classnames';\r\n\r\n/**\r\n* The container for CSS3 flexbox display modules\r\n */\r\nconst Grid = (props)=>{\r\n  const {\r\n    className: classNameProp,\r\n    container,\r\n    direction,\r\n    justify,\r\n    item,\r\n    children,\r\n    ...otherProps\r\n  } = props;\r\n\r\n  const className = classnames(\r\n    {\r\n      [style.container]: container,\r\n      [style.item]: item,\r\n      [style.row]: direction == Grid.defaultProps.direction,\r\n      [style.rowreverse]: direction == 'row-reverse',\r\n      [style.justifystart]: justify == 'flex-start',\r\n      [style.justifyend]: justify == 'flex-end',\r\n      [style.justifycenter]: justify == 'center',\r\n      [style.justifyaround]: justify == 'space-around',\r\n      [style.justifybetween]: justify == 'space-between'\r\n    },\r\n    classNameProp\r\n  );\r\n  const gridProps = { className, ...otherProps };\r\n  return(\r\n    <div {...gridProps}>\r\n      {children}\r\n    </div>\r\n  );\r\n};\r\n\r\nGrid.propTypes = {\r\n  /**\r\n   * the container flag, true: flexbox container.\r\n   */\r\n  container: PropTypes.bool,\r\n  /**\r\n   * Defines the `flex-direction` style property.\r\n   * It is applied for all screen sizes.\r\n   'row', 'row-reverse', 'column', 'column-reverse'\r\n   */\r\n  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),\r\n  /**\r\n   * the item flag, true: flexbox item.\r\n   */\r\n  item: PropTypes.bool,\r\n  /**\r\n   * Defines the 'justify-content' property for a flexbox container.\r\n   'flex-start', 'center', 'flex-end', 'space-between', 'space-around'\r\n   */\r\n  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),\r\n  /** the content of the component*/\r\n  children: PropTypes.node.isRequired\r\n};\r\n\r\nGrid.defaultProps = {\r\n  container: true,\r\n  direction: 'row',\r\n  justify: 'flex-start',\r\n  item: false\r\n};\r\nexport default Grid;\r\n","examples":[{"name":"ExampleGrid","description":"","code":"import React from 'react';\r\nimport Grid from 'react-arsenal/Grid';\r\n\r\n\r\nconst ExampleGrid = function(){\r\n  return (\r\n    <Grid direction=\"row\" justify=\"space-around\">\r\n      <Grid item><p>Lorem ipsum</p></Grid>\r\n      <Grid item><p>Lorem ipsum</p></Grid>\r\n    </Grid>\r\n  );\r\n};\r\n\r\nexport default ExampleGrid;\r\n"}]}]