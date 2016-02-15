import React from 'react';

const Home = React.createClass({
  renderHeader() {
    return (
      <h2>
        The personal website of Sam Roberts
      </h2>
    );
  },

  renderBody() {
    return (
      <div>
        <p>
          Find me on <a href="https://github.com/samgqroberts">Github</a>.
        </p>
        <p>
          Find me on <a href="https://www.linkedin.com/in/sam-roberts-7a421648">Linked In</a>.
        </p>
        <p>
          Find me on <a href="https://www.facebook.com/samgqroberts">Facebook</a>.
        </p>
        <p>
          Find me on <a href="https://play.spotify.com/user/samgqroberts">Spotify</a>.
        </p>
        <p>
          Find me on <a href="https://vine.co/u/1023073943265157120">Vine</a>.
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

export default Home;
