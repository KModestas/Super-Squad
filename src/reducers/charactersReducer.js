import charactersJSON from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';

function characters(state = charactersJSON, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      const characters = state.filter(item => item.id !== action.id)
      return characters;
    default:
      return state;
  }
}

export default characters;
