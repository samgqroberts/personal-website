import React from 'react';

const cssClasses = {
  comp: 'not-found-comp',
};

const NotFound = React.createClass({
  render() {
    return (
      <div className={cssClasses.comp}>
        I am the Not Found content component.
      </div>
    );
  },
});

export default NotFound;
