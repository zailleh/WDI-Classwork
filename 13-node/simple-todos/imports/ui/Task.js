import React, { Component } from 'react';

import { Tasks } from '../api/tasks';

export default class Task extends Component {
  deleteTask() {
    Tasks.remove(this.props.task._id);
  }
  
  toggleComplete() {
    const { task } = this.props;
    Tasks.update( task._id, { 
      $set: { complete: !task.complete }
     });
  }
  render () {
    const {text, complete} = this.props.task

    const taskClassName = complete ? 'checked' : '';

    return (
      <li className={ taskClassName }>
        <button className="delete" onClick={this.deleteTask.bind(this)}>
          &times;
        </button>
        <input
          type="checkbox"
          readOnly
          value={ complete || false }
          className="toggle-private"
          onClick={ this.toggleComplete.bind(this) }
        />
        <span className="text">{ text }</span>
      </li>
    )
  }
}