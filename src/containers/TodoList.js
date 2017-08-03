import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';


export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      completed: false
    }

    this._handleChange = this._handleChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleChange(event){
    this.setState({
      title: event.target.value
    })
  }

  _handleFormSubmit(event){
    console.log("form submitted ");
  }

  render(){

    let todos =

    return (
      <div className="well">
        <form onSubmit={ this._handleFormSubmit }>
          <input onChange={ this._handleChange } value={ this.state.title } className="" type="text" placeholder="enter a todo"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
