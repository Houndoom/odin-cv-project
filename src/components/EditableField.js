import React, { Component } from 'react';
import fieldControl from './fieldControl';

class EditableField extends Component {
  render() {
    let field;
    if (!this.props.edit) {
      field = <div className={this.props.name}>{this.props.value}</div>
    } else {
      field = <input className={this.props.name} onChange={fieldControl.handleChange.bind(this.props.this)} value={this.props.value} data-for={this.props.for}></input>
    }
    return field;
  }
}

export default EditableField;