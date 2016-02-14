import React from 'react';

const cssClasses = {
  comp: 'about-me-comp',
};

const AboutMe = React.createClass({
  render() {
    return (
      <div className={cssClasses.comp}>
        I am the About Me content component.
      </div>
    );
  },
});

export default AboutMe;
