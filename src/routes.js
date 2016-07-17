import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutAndrew from './components/AboutAndrew/AboutAndrew';
import NotFoundPage from './components/NotFoundPage.js';
import AboutHarry from './components/aboutHarry/aboutHarry';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="harry" component={AboutHarry}/>
    <Route path="about" component={AboutAndrew}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
