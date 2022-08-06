import { editableInputTypes } from '@testing-library/user-event/dist/utils';
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
        <EditableField edit={profile.edit} for='profile' this={this} name='profile' value={profile.text} />
      </div>
    );
  }
}

export default Profile;