import React, { Component } from 'react';
import fieldControl from './fieldControl';
import EditButton from './EditButton';

class EditableField extends Component {
  render() {
    let field;
    if (!this.props.element.edit) {
      field = <div className={this.props.name}>{this.props.element.text}</div>
    } else {
      field = <input className={this.props.name} onChange={fieldControl.handleChange.bind(this.props.this)} placeholder={this.props.element.placeholder} value={this.props.element.text} data-for={this.props.name}></input>
    }
    let button = <EditButton name={this.props.name} this={this.props.this} element = {this.props.element} />;

    let editableField = [field, button];
    
    return editableField;
  }
}

export default EditableField;