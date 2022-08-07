import React, { Component } from 'react';
import MainComponent from './MainComponent';
import Profile from './Profile';
import AllInstances from './AllInstances';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      jobs: [
        { 
          org: {
            text: 'Department of Statistics',
            edit: false
          },
          title: {
            text: 'Senior Assistant Director',
            edit: false
          },
          date: {
            text: 'Dec 2012 - Jun 2021',
            edit: false
          }, 
          items: [
            {
              id: 0,
              item: {
                text: 'Streamlined work processes with programming',
                edit: false
              }
            },
            {
              id: 1,
              item: {
                text: 'Coordinated the data processing, writing, and publication of major statistical reports such as the Household Expenditure Survey (HES) 2017/18 and Population Trends',
                edit: false
              }
            }
          ]
        }
      ],
      education: [
        {
          org: {
            text: 'Cornell University',
            edit: false
          },
          title: {
            text: 'Major in Mathematics',
            edit: false
          },
          date: {
            text: '2007 - 2011',
            edit: false
          },
          items: []
        }
      ]
    };
  }

  render() {
    return (
      <div className='main'>
        <MainComponent title='PROFILE' content={<Profile />} />
        <MainComponent title='EXPERIENCE' content={<AllInstances instances={this.state.jobs} type='Experience'/>} />
        <MainComponent title='EDUCATION' content={<AllInstances instances={this.state.education} type='Education'/>} />
      </div>
    )
  }
}

export default Main;
