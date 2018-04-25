import charactersJSON from '../data/characters.json';

export function createCharacter(id) {
  const character = charactersJSON.find(character => character.id === id);
  return character;
}
