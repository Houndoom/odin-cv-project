import React, { Component } from 'react';
import MainComponent from './MainComponent';
import Profile from './Profile';
import Instances from './Instances';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      jobs: [
        { 
          org: 'Department of Statistics',
          title: 'Senior Assistant Director',
          date: 'Dec 2012 - Jun 2021',
          items: [
            {
              id: 0,
              text: 'Streamlined work processes with programming'
            },
            {
              id: 1,
              text: 'Coordinated the data processing, writing, and publication of major statistical reports such as the Household Expenditure Survey (HES) 2017/18 and Population Trends'
            }
          ]
        },
        {
          org: 'GovTech',
          title: 'Data Scientist',
          date: 'Jul 2021 - Present',
          items: [
            {
              id: 0,
              text: 'Perform data sciencey items'
            }
          ]
        }
      ],
      education: [
        {
          org: 'Cornell University',
          title: 'Major in Mathematics',
          date: '2007 - 2011',
          items: [
            {
              id: 0,
              text: 'Summa Cum Laude GPA 4.17/4.3'
            },
            {
              id: 1,
              text: 'Recipient of Harry S. Kieval Prize in Mathematics'
            }
          ]
        },
        {
          org: 'Raffles Junior College',
          title: "4 'A's and 3 Special Paper Distinctions",
          date: '2005 - 2006',
          items: [
            {
              id: 0,
              text: 'Represented Singapore in the International Mathematics Olympiad' 
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className='main'>
        <MainComponent title='PROFILE' content={<Profile />} />
        <MainComponent title='EXPERIENCE' content={<Instances instances={this.state.jobs}/>} />
        <MainComponent title='EDUCATION' content={<Instances instances={this.state.education}/>} />
      </div>
    )
  }
}

export default Main;
