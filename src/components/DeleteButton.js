import React, { Component } from 'react';
import del from '../images/delete.svg'; 

class DeleteButton extends Component {
  render() {
    return (
      <img src={del} alt='Delete' data-item-id={this.props.id} onClick={this.props.delFunc}></img>
    )
  }
}

export default DeleteButton;