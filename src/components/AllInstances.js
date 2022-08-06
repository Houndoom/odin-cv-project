import React, { Component } from 'react';
import Instance from './Instance';

class AllInstances extends Component {

  render() {
    return (
      this.props.instances.map((ins) => {
        return <Instance instance={ins} />
      })
    );
  }
}

export default AllInstances;