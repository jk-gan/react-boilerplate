import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import stores from './stores';
import App from './App';
import PageNotFound from './views/PageNotFound';
import Main from './views/Main';

export default () => (
  <Provider {...stores}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={PageNotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
);
