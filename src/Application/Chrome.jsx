import React from 'react';

import { Link } from 'react-router';

const cssClasses = {
  comp: 'application',
  menu: 'menu-section',
  activeLink: 'active-link',
  content: 'content-section',
};

const MenuLink = ({ to, isIndex, children }) => (
  <li>
    <Link {...{ to }} activeClassName={cssClasses.activeLink} onlyActiveOnIndex={isIndex}>
      {children}
    </Link>
  </li>
);

const Chrome = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
  },

  renderMenuSection() {
    return (
      <div className={cssClasses.menu + ' col-md-3'}>
        <ul>
          <MenuLink to="" isIndex>Home</MenuLink>
          <MenuLink to="projects">Projects</MenuLink>
          <MenuLink to="about">About Me</MenuLink>
          <MenuLink to="sylverstudios">Sylver Studios</MenuLink>
        </ul>
      </div>
    );
  },

  renderContentSection() {
    return (
      <div className={cssClasses.content + ' col-md-8'}>
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
