import React, { Component } from 'react';
import Contact from './Contact';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div class="header-top">
          <div className='name'>Tham Zheng Kang</div>
          <div className='job-title'>Statistician</div>
        </div>
        <Contact src={images['phone.svg']} text='+65 9647 5705' />
        <Contact src={images['email.svg']} text='zt33@cornell.edu' />
      </div>
    );
  }
}

export default Header;