import React, { Component } from 'react';
import fieldControl from './fieldControl';
import edit from '../images/pencil.svg';
import confirm from '../images/check.svg';

class EditButton extends Component {
  render() {
    let button;
    if (!this.props.element.edit) {
      button = <img src={edit} alt='Edit' onClick={fieldControl.editField.bind(this.props.this)} data-for={this.props.name}/>
    } else {
      button = <img src={confirm} alt='Confirm' onClick={fieldControl.confirmField.bind(this.props.this)} data-for={this.props.name}/>
    }
    return button;
  }
}

export default EditButton;