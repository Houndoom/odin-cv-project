import React, { Component } from 'react';
import add from '../images/plus.svg';
import InstanceItem from './InstanceItem';

class Instance extends Component {
  constructor(props) {
    super(props);

    this.state = props.instance;
  }

  addItem = (e) => {
    this.setState({
      items: [...this.state.items, {
        id: this.state.items.length,
        item: {
          text: '',
          edit: true
        }
      }]
    })
    console.log(this.state)
  }

  render() {
    const instance = this.state;
    return (
      <div className='instance'>
        <div className='org'>{instance.org}</div>
        <div>[<span className='title'>{instance.title}</span>]</div>
        <div className='date'>{instance.date}</div>
          <ul>
            {instance.items.map((task) => {
              return (
                <li>
                  <div className='list-item'>
                    <InstanceItem item={task} />
                  </div>
                </li>);
            })}
            <img src={add} alt='Add' onClick={this.addItem}></img>
          </ul>
      </div>
      );
  }
}

export default Instance;