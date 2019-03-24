import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import path from './path';
import Dashboard from '../pages/Dashboard';

const Root = () => (
  <Router>
    <Switch>
      <Route path={path.root} component={Dashboard} />
    </Switch>
  </Router>
);

export default Root;
