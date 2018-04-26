import charactersJSON from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARCTER } from '../actions';
import { createCharacter } from './helpers';


function characters(state = charactersJSON, action) {

  switch(action.type) {

    case ADD_CHARACTER: {
      const characters = state.filter(item => item.id !== action.id);
      return characters;
    }

    case REMOVE_CHARCTER: {
      const characters = [...state, createCharacter(action.id)];
      return characters;
    }
    default:
      return state;
  }
}

export default characters;
