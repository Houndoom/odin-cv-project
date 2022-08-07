import React, { Component } from 'react';
import Instance from './Instance';
import add from '../images/plus.svg';

class AllInstances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allInstances: props.instances
    }
  }

  addInstance = (e) => {
    console.log(this.state);
    this.setState({
      allInstances: [...this.state.allInstances, {
        org: {
          text: `Name of ${this.props.orgType}`,
          edit: true
        },
        title: {
          text: `${this.props.titleType}`,
          edit: true
        },
        date: {
          text: 'Year/duration',
          edit: true
        },
        items: []
      }]
    })
    console.log(this.state);
  }

  render() {
    const Instances = [
      this.state.allInstances.map((ins) => {
        return <Instance instance={ins} />
      }),
      <div className="add-instance">
        <img src={add} alt='Add' onClick={this.addInstance}></img>
        Add {this.props.type}
      </div>
    ]
    return Instances;
  }
}

export default AllInstances;