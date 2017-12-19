
import React from 'react';
import Button from 'react-arsenal/Button';


const clickHandler = ()=>{
  console.log("clicked");
};
const ExampleButton = function(){
  return (<Button onClick={clickHandler}/>);
};

export default ExampleButton;
