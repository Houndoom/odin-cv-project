import React, { Component } from 'react';
import Instance from './Instance';
import add from '../images/plus.svg';

class AllInstances extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allInstances: []
    }
  }

  addInstance = (e) => {
    console.log(this.state);
    this.setState({
      allInstances: [...this.state.allInstances, {
        org: {
          placeholder: `Name of ${this.props.orgType}`,
          text: '',
          edit: true
        },
        title: {
          placeholder: `${this.props.titleType}`,
          text: '',
          edit: true
        },
        date: {
          placeholder: 'Year/duration',
          text: '',
          edit: true
        },
        items: []
      }]
    })
    console.log(this.state);
  }

  deleteInstance = (e) => {
    this.setState({
      allInstances: this.state.allInstances.filter((_, i) => i !== parseInt(e.target.getAttribute('data-item-id')))
    })
  }

  render() {
    const Instances = [
      this.state.allInstances.map((ins, i) => {
        return <Instance instance={ins} id={i} delFunc={this.deleteInstance} />
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