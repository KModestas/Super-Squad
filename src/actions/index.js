export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARCTER = 'REMOVE_CHARCTER';

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  };
  return action;
}

export function removeCharacterById(id) {
  const action = {
    type: REMOVE_CHARCTER,
    id
  };
  return action;
}
