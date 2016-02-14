import React from 'react';

import Chrome from './Chrome';
import AboutMe from './AboutMe';

const AboutMePage = React.createClass({
  render() {
    return (
      <Chrome>
        <AboutMe />
      </Chrome>
    );
  },
});

export default AboutMePage;
