import React, { Component } from 'react';
import add from '../images/plus.svg';
import InstanceItem from './InstanceItem';
import EditableField from './EditableField';

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
        <div className='org-field'>
          <EditableField element={instance.org} this={this} name='org' />
        </div>
        <div>
          [<span className='title'>{instance.title.text}</span>]
        </div>
        <div className="date-field">
          <EditableField element={instance.date} this={this} name='date' />
        </div>
        <ul>
          {instance.items.map((task) => {
            return (
              <li>
                <div className='list-item'>
                  <InstanceItem item={task} />
                </div>
              </li>);
          })}
          <div class="add-item">
            <img src={add} alt='Add' onClick={this.addItem}></img>
            Add item
          </div>
        </ul>
      </div>
      );
  }
}

export default Instance;