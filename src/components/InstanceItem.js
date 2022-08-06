import React, { Component } from 'react';
import del from '../images/delete.svg'; 
import EditableField from './EditableField';

class InstanceItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item.item
    };
  }
  render() {
    const { item } = this.state;
    return (
      <li>
        <div className='list-item'>
          <EditableField edit={item.edit} for='item' this={this} name='item' value={item.text} />
          <img src={del} alt='Delete'></img>
        </div>
      </li>);
  }
}

export default InstanceItem;