import React from 'react';

const cssClasses = {
  comp: 'application',
  menu: 'menu-section',
  content: 'content-section',
};

const Application = React.createClass({
  render() {
    return (
      <div className={cssClasses.comp}>
        <div className={cssClasses.menu}>
          I am a menu section
        </div>
        <div className={cssClasses.content}>
          I am a content section
        </div>
      </div>
    );
  },
});

export default Application;
