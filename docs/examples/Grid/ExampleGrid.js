import React from 'react';
import Grid from 'react-arsenal/Grid';
import style from './style.scss';
const ExampleGrid = function(){
  return (
    <Grid className={style.root}>
      <Grid item><p>Lorem ipsum</p></Grid>
      <Grid item><p>Lorem ipsum</p></Grid>
    </Grid>
  );
};

export default ExampleGrid;
