import React from 'react';
import PropTypes from 'prop-types';

class DemoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCode: false
    };
  }

  toggleCode = event =>{
    event.preventDefault();
    this.setSate(prevSate =>{
      return { showCode: !prevSate.showCode};
    });
  }

  render() {
    const { showCode } = this.state;
    const { code, description, name} = this.props.demo;

    //Must use CommonJS require to dynamically require because ES6 Modules must be
    //statically analyzable.
    console.log(`../../../../examples/${this.props.componentName}/${name}`);
    const DemoComponent = require(`../../../../examples/${this.props.componentName}/${name}`).default;
    return (
      <div className="example">
        {description && <h4>{description}</h4>}
        <DemoComponent />
        <p>
          <a href="#" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>
        {showCode && code}
      </div>
    );
  }
}

DemoContainer.propTypes = {
  demo: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default DemoContainer;
