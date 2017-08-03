import {ADD_TODO, DELETE_TODO} from '../actions/index';
import _ from 'lodash';

const TODOS = [
  {title: "eat food", completed: false},
  {title: "stay hungry", completed: true}
];

export default function(state=TODOS, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
      break;
    case 'DELETE_TODO':
      return

    default:
      return state;
  }
}
