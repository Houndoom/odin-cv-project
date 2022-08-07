import React, { Component } from 'react';
import EditableField from './EditableField';
import EmptySpace from './EmptySpace';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        placeholder: 'Provide a brief description of yourself here',
        text: '',
        edit: true
      }
    };
  }

  render () {
    const { profile } = this.state;
    return (
      <div className='profile-text'>       
        <EditableField element={profile} this={this} name='profile' />
        <EmptySpace />
      </div>
    );
  }
}

export default Profile;