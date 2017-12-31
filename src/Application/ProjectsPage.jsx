import React from 'react';

import Chrome from './Chrome';
import AboutMe from './AboutMe';

const ProjectsPage = React.createClass({
  render() {
    return (
      <Chrome>
        <div>
          <h2 className="content-header">Projects</h2>
          <div className="content-body">
            <h4>Headmates</h4>
            <div>Experimenting with Markov Chains and text prediction, in Elm.</div>
            <ul>
              <li><a href="http://samgqroberts.com/headmates">Demo</a></li>
              <li><a href="https://github.com/SylverStudios/headmates">Github</a></li>
            </ul>
          </div>
        </div>
      </Chrome>
    );
  },
});

export default ProjectsPage;
