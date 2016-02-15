import React from 'react';

const SylverStudios = React.createClass({

  renderHeader() {
    return (
      <h2>
        Sylver Studios
      </h2>
    );
  },

  renderBody() {
    return (
      <div>
        <p>
          I work together with my long time best friend <a href="https://github.com/miguel4president">Aaron Votre</a> on
          scattered projects and games.  We call ourselves <a href="http://samgqroberts.com/sylverstudios/">Sylver Studios</a>.
        </p>
      </div>
    );
  },

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  },
});

export default SylverStudios;
