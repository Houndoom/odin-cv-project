import React, { Component } from 'react';
import add from '../images/plus.svg';
import InstanceItem from './InstanceItem';
import EditableField from './EditableField';
import EditButton from './EditButton';
import fieldControl from './fieldControl';
import DeleteButton from './DeleteButton';
import EmptySpace from './EmptySpace';

class Instance extends Component {
  constructor(props) {
    super(props);

    this.state = props.instance;
  }

  addItem = (e) => {
    this.setState({
      items: [...this.state.items, {
        item: {
          placeholder: '',
          text: '',
          edit: true
        }
      }]
    })
    console.log(this.state)
  }

  deleteItem = (e) => {
    this.setState({
      items: this.state.items.filter((_, i) => i !== parseInt(e.target.getAttribute('data-item-id')))
    })
  }

  onEnter = (e) => {
    if (e.key === 'Enter') {
      fieldControl.confirmField.call(this, e);
    }
  }

  render() {
    const instance = this.state;

    // Ad-hoc EditableField as it needs to be a span to put it in the square brackets
    let titleField;
    if (!instance.title.edit) {
      titleField = <span className='title'>{instance.title.text}</span>
    } else {
      titleField = <input className='title' onChange={fieldControl.handleChange.bind(this)} placeholder={instance.title.placeholder} data-for='title' onKeyDown={this.onEnter}></input>
    }

    return (
      <div className='instance'>
        <div className='org-field'>
          <EditableField element={instance.org} this={this} name='org' />
          <DeleteButton id={this.props.id} delFunc={this.props.delFunc} />
        </div>
        <div className='title-field'>
          <div className='title-span'>
            [{titleField}]
          </div>
          <EditButton element={instance.title} this={this} name='title' />
          <EmptySpace />
        </div>
        <div className="date-field">
          <EditableField element={instance.date} this={this} name='date' />
          <EmptySpace />
        </div>
        <ul>
          {instance.items.map((task, i) => {
            return (
              <li>
                <div className='list-item'>
                  <InstanceItem item={task} id={i} delFunc={this.deleteItem}/>
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