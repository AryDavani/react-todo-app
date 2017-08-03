import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, updateTodo, filterTodo} from '../actions/index';
import {bindActionCreators} from 'redux';
import _ from 'lodash';


class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      completed: false
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleOptions = this._handleOptions.bind(this);
  }

  _handleChange(event){
    this.setState({
      title: event.target.value
    })
  }

  _handleFormSubmit(event){
    event.preventDefault();

    let todo = {title: this.state.title, completed: false};
    this.props.addTodo(todo);
  }

  _handleOptions(event){
    console.log("selected", event.target.value);
  }

  render() {
    // console.log("todos", this.props.todos);

    let allTodos = this.props.todos.map((todo, index) => {
      return (
        <li key={ index }>
          <h2>{ todo.title }</h2>
          <button onClick={ () => this.props.deleteTodo(todo)} className="btn btn-danger">Delete</button>
          <button className="btn btn-primary">Mark Complete</button>
        </li>
      )
    })

    return (
      <div className="well">

        <form onSubmit={ this._handleFormSubmit }>
          <input onChange={ this._handleChange } value={ this.state.title } className="" type="text" placeholder="enter a todo"/>
          <button type="submit">Submit</button>
        </form>

        <select onChange={ this._handleOptions }>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomlete</option>
        </select>

        <ul>
          { allTodos }
        </ul>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo: addTodo, deleteTodo: deleteTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
