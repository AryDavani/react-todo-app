export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FILTER_TODO = 'FILTER_TODO';


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
  console.log('todo', todo);
  return {
    type: UPDATE_TODO,
    payload: todo
  }
}
