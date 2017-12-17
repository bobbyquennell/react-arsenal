
import React from 'react';
import Button from 'react-arsenal/Button';

const ExampleButton = function(){
  return (<Button onClick={()=>{ console.log("clicked me");}}/>);
};

export default ExampleButton;
