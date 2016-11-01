import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import ga from './analytics/ga'

// Layouts
import MainCheckoutLayout from './checkout/layouts/MainCheckoutLayout';

// Pages
import CraftContentArea from './checkout/craft/ContentArea';
import EmailContentArea from './checkout/craft/EmailContentArea';

export default (
  <Router history={browserHistory} onUpdate={ga.trackPageview}>
    <Route path="/">
      <Route path="checkout" component={MainCheckoutLayout}>
        <IndexRedirect to="craft" />
        <Route path="craft">
          <IndexRedirect to="moisture" />
          <Route path="email" component={EmailContentArea} />
          <Route path=":question" component={CraftContentArea} />
        </Route>
      </Route>
    </Route>
  </Router>
);
