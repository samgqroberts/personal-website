import React from 'react';

const cssClasses = {
  comp: 'about-me-comp',
  header: 'content-header',
  body: 'content-body',
};

const AboutMe = React.createClass({

  renderHeader() {
    return (
      <h2 className={cssClasses.header}>
        About Sam Roberts
      </h2>
    );
  },

  renderBody() {
    return (
      <div className={cssClasses.body}>
        <p>
        I'm slowly but surely learning how to make software, and every day that goes by I tack on two
        days to my estimate for when I will have "learned how to make software".

        </p>
        <p>
                My second-favorite hobby is music.  I've spent a lot of my life noodling around on guitar and
                piano.

        </p>
        <p>
          A common theme I've noticed in my hobbies is the fundamental act of creation.  I'm happiest
          when I've created something, and I can step back and behold it, whether that something is
          software or a song.
        </p>
      </div>
    );
  },

  render() {
    return (
      <div className={cssClasses.comp}>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  },
});

export default AboutMe;
