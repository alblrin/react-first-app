import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const url = `https://media.giphy.com/media/${this.props.id}/source.gif`;
    return (
      <img src={url} alt="" className="gif" />
    );
  }
}

export default Gif;
