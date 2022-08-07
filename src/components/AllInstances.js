import React, { Component } from 'react';
import Instance from './Instance';
import add from '../images/plus.svg';

class AllInstances extends Component {
  constructor(props) {
    super(props);

    this.state = props.instances;
  }

  render() {
    const Instances = [
      this.state.map((ins) => {
        return <Instance instance={ins} />
      }),
      <div className="add-instance">
        <img src={add} alt='Add'></img>
        Add {this.props.type}
      </div>
    ]
    return Instances;
  }
}

export default AllInstances;