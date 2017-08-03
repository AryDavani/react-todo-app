const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const FILTER_TODO = 'FILTER_TODO';


// action to add a todo to the todos list

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

// action to delete a certain todo

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo
  }
}

// action to filter the todos by all, complete, or incomplete

export function filterTodo(filter) {
  return {
    type: FILTER_TODO,
    payload: filter
  }
}

// action to update todo to complete or incomplete

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}
