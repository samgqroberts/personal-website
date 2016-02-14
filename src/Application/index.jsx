import React from 'react';

import { browserHistory, Router } from 'react-router';

import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import NotFoundPage from './NotFoundPage';

const contentRoutes = {
  path: '/',
  indexRoute: { component: HomePage },
  childRoutes: [
    { path: 'about', component: AboutMePage },
    { path: '*', component: NotFoundPage },
  ],
};

const Application = React.createClass({
  render() {
    return (
      <Router history={browserHistory} routes={contentRoutes} />
    );
  },
});

export default Application;
