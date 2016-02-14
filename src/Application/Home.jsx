import React from 'react';

const cssClasses = {
  comp: 'home-comp',
};

const Home = React.createClass({
  render() {
    return (
      <div className={cssClasses.comp}>
        I am the Home content component.
      </div>
    );
  },
});

export default Home;
