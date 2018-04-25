import { createCharacter } from './helpers';
import { ADD_CHARACTER } from '../actions';

function heroes(state = [], action) {
  switch(action.type) {
    case ADD_CHARACTER:
      const heroes = [...state, createCharacter(action.id)];
      return heroes;
    default:
      return state;
  }
}

export default heroes;
