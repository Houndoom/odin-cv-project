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
        placeholder: 'Enter name here',
        text: '',
        edit: true
      },
      jobTitle: {
        placeholder: 'Enter title here',
        text: '',
        edit: true
      }
    }
  }

  render() {
    const { personName, jobTitle } = this.state;
    
    return (
      <div className='header'>
        <div className="header-top">
          <EditableField element={personName} this={this} name='personName' />
          <EditableField element={jobTitle} this={this} name='jobTitle' />
          </div>
        <Contact src={images['phone.svg']} placeholder='Phone number' />
        <Contact src={images['email.svg']} placeholder='Email address' />
      </div>
    );
  }
}

export default Header;