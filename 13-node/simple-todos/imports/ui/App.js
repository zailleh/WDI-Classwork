import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks';
import Task from './Task';

class App extends Component {
  _handleSubmit(event) {
    event.preventDefault();
    
    const text = this.newTask.value.trim();
    const createdAt = Date.now();
    
    Tasks.insert( { text, createdAt } );

    // clear input
    this.newTask.value = '';
  }

  renderTasks() {
    return this.props.tasks.map( ( task ) => {
      return (<Task key={ task._id } task={ task } />);
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <form className="new-task" onSubmit={this._handleSubmit.bind(this)} >
            <input
              type="text"
              ref={ (node) => this.newTask = node }
              placeholder="Click and type to add a new task"
            />
          </form>
        </header>

        <ul>
          { this.renderTasks() }
        </ul>
      </div>
    )
  }
}

export default withTracker( () => {
  return {
    tasks: Tasks.find({}, { sort: {createdAt: -1}}).fetch() // MongoDB

  }
})(App)