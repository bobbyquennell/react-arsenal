import React from 'react';
import PropTypes from 'prop-types';
import DemoContainer from '../democontainer/democontainer';
import Api from '../api/api';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;
  return (
    <div className="componentpage">
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Example{examples.legth > 1 && "s"}</h3>
      {
        examples.length > 0 ?
          examples.map( example=>
            <DemoContainer key={example.code} demo={example} componentName={name} />
          ) : "No examples exist."
      }
      <h3>Props</h3>
      {
        props ?
          <Api props={props} /> :
          "This component accepts no props."
      }
    </div>
  );
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
