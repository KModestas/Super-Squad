import charactersJSON from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';


function createCharater(id) {
  const character = characters_json.find(character => character.id === id);
  return character;
}

function heroes(state = [], action) {
  switch(action.type) {
    case ADD_CHARACTER:
      const heroes = [...state, createCharater(action.id)];
      return heroes;
    default:
      return state;
  }
}

export default heroes;
