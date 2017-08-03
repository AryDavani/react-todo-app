import _ from 'lodash';

const TODOS = [
  {title: "eat food", completed: false},
  {title: "stay hungry", completed: true}
];

export default function(state=TODOS, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return action.payload;
      break;

    default:
      return state;
  }
}
