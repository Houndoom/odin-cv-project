import React, { Component } from 'react';
import InstanceItems from './InstanceItems';

class Instances extends Component {
  render() {
    return (
      this.props.instances.map((instance) => {
        return (
          <div className='instance'>
            <div className='org'>{instance.org}</div>
            <div>[<span className='title'>{instance.title}</span>]</div>
            <div className='date'>{instance.date}</div>
            <InstanceItems tasks={instance.tasks}/>
          </div>
          );
      })
    );
  }
}

export default Instances;