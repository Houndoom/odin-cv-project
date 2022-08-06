import React, { Component } from 'react';
import fieldControl from './fieldControl';
import edit from '../images/pencil.svg';
import confirm from '../images/check.svg';

class EditableField extends Component {
  render() {
    let field;
    if (!this.props.edit) {
      field = [
        <div className={this.props.name}>{this.props.value}</div>,
        <img src={edit} alt='Edit' onClick={fieldControl.editField.bind(this.props.this)} data-for={this.props.for}/>
      ]
    } else {
      field = [
        <input className={this.props.name} onChange={fieldControl.handleChange.bind(this.props.this)} value={this.props.value} data-for={this.props.for}></input>,
        <img src={confirm} alt='Confirm' onClick={fieldControl.confirmField.bind(this.props.this)} data-for={this.props.for}/>
      ]
    }
    return field;
  }
}

export default EditableField;