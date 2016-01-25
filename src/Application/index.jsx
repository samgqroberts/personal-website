import React from 'react';
import classNames from 'classnames';

const cssClasses = {
  comp: 'application',
  menu: 'menu-section',
  content: 'content-section',
};

const Application = React.createClass({
  renderMenu() {
    const menuClassNames = classNames({
      [cssClasses.menu]: true,
      'col-md-3': true,
    });
    return (
      <div className={menuClassNames}>
        hi Im the menu
      </div>
    );
  },

  renderContent() {
    const contentClassNames = classNames({
      [cssClasses.content]: true,
      'col-md-9': true,
    });
    return (
      <div className={contentClassNames}>
        hi Im the content
      </div>
    );
  },

  render() {
    return (
      <div className={cssClasses.comp + ' container'}>
        <div className="row">
          {this.renderMenu()}
          {this.renderContent()}
        </div>
      </div>
    );
  },
});

export default Application;
