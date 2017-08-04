import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../actions/index';
import _ from 'lodash';

const TODOS = [
  {title: "eat food", completed: false},
  {title: "stay hungry", completed: true}
];

export default function(state=TODOS, action) {
  switch (action.type) {

    case ADD_TODO:
      return [...state, action.payload];
      break;

    case DELETE_TODO:
      return _.reject(state, action.payload);
      break;

    case UPDATE_TODO:
      return state.map((todo) => (todo === action.payload) ? { ...todo, completed: !todo.completed } : todo )
      break;

    default:
      return state;
  }
}
