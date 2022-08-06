import React, { Component } from 'react';
import del from '../images/delete.svg'; 
import edit from '../images/pencil.svg';
import add from '../images/plus.svg';

class InstanceItems extends Component {

  render() {
    return (
      <ul>
        {this.props.items.map((task) => {
          return (
            <li>
              <div className='list-item'>
                {task.text}
                <img src={edit} alt='Edit'></img>
                <img src={del} alt='Delete'></img>
              </div>
            </li>);
        })}
        <img src={add} alt='Add'></img>
      </ul>
    );
  }
}

export default InstanceItems;