import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Docs from './components/docs/docs';

const App = function() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/docs" component={Docs}/>
      </div>
    </Router>
  );
};

export default App;
