import React, { Component } from 'react';
import EditableField from './EditableField';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        text: 'Provide a brief description of yourself here.',
        edit: false
      }
    };
  }

  render () {
    const { profile } = this.state;
    return (
      <div className='profile-text'>       
        <EditableField element={profile} this={this} name='profile' />
      </div>
    );
  }
}

export default Profile;