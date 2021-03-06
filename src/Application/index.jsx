import React from 'react';

import { browserHistory, Router } from 'react-router';

import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import AboutMePage from './AboutMePage';
import SylverStudiosPage from './SylverStudiosPage';
import NotFoundPage from './NotFoundPage';

const contentRoutes = {
  path: '/',
  indexRoute: { component: HomePage },
  childRoutes: [
    { path: 'projects', component: ProjectsPage },
    { path: 'about', component: AboutMePage },
    { path: 'sylverstudios', component: SylverStudiosPage },
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
