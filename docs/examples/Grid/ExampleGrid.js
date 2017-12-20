import React from 'react';
import Grid from 'react-arsenal/Grid';


const ExampleGrid = function(){
  return (
    <Grid direction="row" justify="space-around">
      <Grid item><p>Lorem ipsum</p></Grid>
      <Grid item><p>Lorem ipsum</p></Grid>
    </Grid>
  );
};

export default ExampleGrid;
