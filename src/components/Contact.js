import React, { Component } from 'react';

class Contact extends Component {
  render () {
    return (
      <div className='contact'>
        <img src={this.props.src} alt='icon' />
        <div className='contact-text'>{this.props.text}</div>
      </div>
    );
  }
}

export default Contact;