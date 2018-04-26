import { createCharacter } from './helpers';
import { ADD_CHARACTER, REMOVE_CHARCTER } from '../actions';


function heroes(state = [], action) {
  switch(action.type) {

    case ADD_CHARACTER: {
      const heroes = [...state, createCharacter(action.id)];
      return heroes;
    }

    case REMOVE_CHARCTER: {
      const heroes = state.filter(item => item.id !== action.id);
      return heroes;
    }

    default:
      return state;
  }
}

export default heroes;
