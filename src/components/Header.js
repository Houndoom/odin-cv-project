import React, { Component } from 'react';
import Contact from './Contact';
import EditableField from './EditableField';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class Header extends Component {
  constructor() {
    super();

    this.state = {
      personName: {
        placeholder: 'Edit name here',
        text: '',
        edit: true
      },
      jobTitle: {
        placeholder: 'Edit title here',
        text: '',
        edit: true
      }
    }
  }

  render() {
    const { personName, jobTitle } = this.state;
    
    return (
      <div className='header'>
        <div class="header-top">
          <EditableField element={personName} this={this} name='personName' />
          <EditableField element={jobTitle} this={this} name='jobTitle' />
          </div>
        <Contact src={images['phone.svg']} placeholder='Edit phone number' />
        <Contact src={images['email.svg']} placeholder='Edit email' />
      </div>
    );
  }
}

export default Header;