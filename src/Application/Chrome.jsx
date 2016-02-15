import React from 'react';

import { Link } from 'react-router';

const cssClasses = {
  comp: 'application',
  menu: 'menu-section',
  activeLink: 'active-link',
};

const Chrome = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
  },

  renderMenuSection() {
    return (
      <div className={cssClasses.menu + ' col-md-3'}>
        <ul>
          <li>
            <Link to="" activeClassName={cssClasses.activeLink} onlyActiveOnIndex>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" activeClassName={cssClasses.activeLink}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="sylverstudios" activeClassName={cssClasses.activeLink}>
              Sylver Studios
            </Link>
          </li>
        </ul>
      </div>
    );
  },

  renderContentSection() {
    return (
      <div className="col-md-9">
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
