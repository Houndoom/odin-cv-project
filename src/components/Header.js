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
        text: 'Edit name here',
        edit: false
      },
      jobTitle: {
        text: 'Edit title here',
        edit: false
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
        <Contact src={images['phone.svg']} text='Edit phone number' />
        <Contact src={images['email.svg']} text='Edit email' />
      </div>
    );
  }
}

export default Header;