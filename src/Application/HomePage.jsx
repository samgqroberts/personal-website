import React from 'react';

import Chrome from './Chrome';
import Home from './Home';

const HomePage = React.createClass({
  render() {
    return (
      <Chrome>
        <Home />
      </Chrome>
    );
  },
});

export default HomePage;
