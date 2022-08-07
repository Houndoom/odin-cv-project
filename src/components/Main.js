import React, { Component } from 'react';
import MainComponent from './MainComponent';
import Profile from './Profile';
import AllInstances from './AllInstances';

class Main extends Component {
  
  render() {
    return (
      <div className='main'>
        <MainComponent title='PROFILE' content={<Profile />} />
        <MainComponent title='EXPERIENCE' content={<AllInstances type='Experience' orgType='company' titleType='job title'/>} />
        <MainComponent title='EDUCATION' content={<AllInstances type='Education' orgType='school' titleType='field of study'/>} />
      </div>
    )
  }
}

export default Main;
