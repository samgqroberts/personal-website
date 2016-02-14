import React from 'react';
import classNames from 'classnames';

import { browserHistory, Router, Link } from 'react-router';

import Home from './content/Home';
import AboutMe from './content/AboutMe';
import NotFound from './content/NotFound';

const contentRoutes = {
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: AboutMe },
    { path: '*', component: NotFound },
  ],
};

const cssClasses = {
  comp: 'application',
  menu: 'menu-section',
  content: 'content-section',
};

const Application = React.createClass({
  renderMenuSection() {
    const menuClassNames = classNames({
      [cssClasses.menu]: true,
      'col-md-3': true,
    });
    return (
      <div className={menuClassNames}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Me</li>
          </Link>
          <Link to="/xalcn22k22">
            <li>Nonsense url (not found page)</li>
          </Link>
        </ul>
      </div>
    );
  },

  renderContentSection() {
    const contentClassNames = classNames({
      [cssClasses.content]: true,
      'col-md-9': true,
    });
    return (
      <div className={contentClassNames}>
        <Router routes={contentRoutes}/>
      </div>
    );
  },

  render() {
    return (
      <div className={cssClasses.comp + ' container'}>
        <div className="row">
          {this.renderMenuSection()}
          {this.renderContentSection()}
        </div>
      </div>
    );
  },
});

export default Application;
