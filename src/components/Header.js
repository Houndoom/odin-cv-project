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
          <EditableField edit={personName.edit} for='personName' this={this} name='name' value={personName.text} />
          <EditableField edit={jobTitle.edit} for='jobTitle' this={this} name='job-title' value={jobTitle.text} />
          </div>
        <Contact src={images['phone.svg']} text='Edit phone number' />
        <Contact src={images['email.svg']} text='Edit email' />
      </div>
    );
  }
}

export default Header;