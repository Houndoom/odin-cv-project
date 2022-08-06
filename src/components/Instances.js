import React, { Component } from 'react';
import del from '../images/delete.svg'; 
import edit from '../images/pencil.svg';
import add from '../images/plus.svg';
import InstanceItem from './InstanceItem';

class Instances extends Component {
  render() {
    return (
      this.props.instances.map((instance) => {
        return (
          <div className='instance'>
            <div className='org'>{instance.org}</div>
            <div>[<span className='title'>{instance.title}</span>]</div>
            <div className='date'>{instance.date}</div>
              <ul>
                {instance.items.map((task) => {
                  return (
                    <li>
                      <div className='list-item'>
                        <InstanceItem item={task} />
                      </div>
                    </li>);
                })}
                <img src={add} alt='Add'></img>
              </ul>
          </div>
          );
      })
    );
  }
}

export default Instances;