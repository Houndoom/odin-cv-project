import React, { Component } from 'react';
import fieldControl from './fieldControl';
import edit from '../images/pencil.svg';
import confirm from '../images/check.svg';

class EditableField extends Component {
  render() {
    let field;
    if (!this.props.element.edit) {
      field = [
        <div className={this.props.name}>{this.props.element.text}</div>,
        <img src={edit} alt='Edit' onClick={fieldControl.editField.bind(this.props.this)} data-for={this.props.name}/>
      ]
    } else {
      field = [
        <input className={this.props.name} onChange={fieldControl.handleChange.bind(this.props.this)} value={this.props.element.text} data-for={this.props.name}></input>,
        <img src={confirm} alt='Confirm' onClick={fieldControl.confirmField.bind(this.props.this)} data-for={this.props.name}/>
      ]
    }
    return field;
  }
}

export default EditableField;