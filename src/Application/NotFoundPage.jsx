import React from 'react';

import Chrome from './Chrome';
import NotFound from './NotFound';

const NotFoundPage = React.createClass({
  render() {
    return (
      <Chrome>
        <NotFound />
      </Chrome>
    );
  },
});

export default NotFoundPage;
