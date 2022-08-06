import React, { Component } from 'react';
import edit from '../images/pencil.svg';
import confirm from '../images/check.svg';
import fieldControl from './fieldControl';

class EditIcon extends Component {

  render() {
    let img;
    if (!this.props.edit) {
      img = <img src={edit} alt='Edit' onClick={fieldControl.editField.bind(this.props.this)} data-for={this.props.for}/>
    } else {
      img = <img src={confirm} alt='Confirm' onClick={fieldControl.confirmField.bind(this.props.this)} data-for={this.props.for}/>
    }
    return img;
  }
}

export default EditIcon;