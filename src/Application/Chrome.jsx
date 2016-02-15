import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router';

const cssClasses = {
  comp: 'application',
  menu: 'menu-section',
  content: 'content-section',
};

const Chrome = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
  },

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
        {this.props.children}
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

export default Chrome;
