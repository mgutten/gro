import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Layouts
import MainCheckoutLayout from './checkout/layouts/MainCheckoutLayout';

// Pages
import CraftContentArea from './checkout/craft/ContentArea';

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="checkout" component={MainCheckoutLayout}>
        <IndexRedirect to="craft" />
        <Route path="craft" component={CraftContentArea} />
      </Route>
    </Route>
  </Router>
);
