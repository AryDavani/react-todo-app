import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, updateTodo} from '../actions/index';
import {bindActionCreators} from 'redux';


class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      filter: 'All'
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
    this.setState({
      filter: event.target.value
    });
    console.log("todos equal", this.props.todos);
    console.log("selected", event.target.value);
  }


  render() {
    let todos = this.props.todos.filter((todo) => {
      if(todo.completed && this.state.filter === 'Completed'){
        return todo;
      } else if (!todo.completed && this.state.filter === 'Incomplete') {
        return todo;
      } else if (this.state.filter === 'All') {
        return todo;
      }
    });

    todos = todos.map((todo, index) => {
      return (
        <li key={ index }>
          <h2>{ todo.title }</h2>
          <button onClick={ () => this.props.deleteTodo(todo)} className="btn btn-danger">Delete</button>
          <button onClick={ () => this.props.updateTodo(todo) } className="btn btn-primary">{ todo.completed ? "Mark Incomplete" : "Mark Complete" }</button>
        </li>
      )
    })

    return (
      <div className="well">

        <form onSubmit={ this._handleFormSubmit }>
          <input onChange={ this._handleChange } value={ this.state.title } className="" type="text" placeholder="enter a todo"/>
          <button className="btn btn-success" type="submit">Submit</button>
        </form>

        <select onChange={ this._handleOptions }>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>

        <ul>
          { todos }
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
  return bindActionCreators({ addTodo: addTodo, deleteTodo: deleteTodo, updateTodo: updateTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
