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
          <EditableField element={item} this={this} name='item' />
          <img src={del} alt='Delete' data-item-id={this.props.id} onClick={this.props.delFunc}></img>
        </div>
      </li>);
  }
}

export default InstanceItem;