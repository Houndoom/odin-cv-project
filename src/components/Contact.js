import React, { Component } from 'react';
import EditableField from './EditableField';

class Contact extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contact: {
        text: props.text,
        edit: false
      }
    };
  }

  render () {
    const { contact } = this.state;
    return (
      <div className='contact'>
        <img src={this.props.src} alt='Icon' />
        <EditableField edit={contact.edit} for='contact' this={this} name='contact' value={contact.text} />
        </div>
    );
  }
}

export default Contact;