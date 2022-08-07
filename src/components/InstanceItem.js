import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
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
          <DeleteButton id={this.props.id} delFunc={this.props.delFunc} />
        </div>
      </li>);
  }
}

export default InstanceItem;