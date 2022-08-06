import React, { Component } from 'react';

class MainComponent extends Component {
  render() {
    return (
      <div className = 'main-component'>
        <div className = 'main-title'>{this.props.title}</div>
        <div className = 'content'>{this.props.content}</div>
      </div>
    );
  }
}

export default MainComponent;