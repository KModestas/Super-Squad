import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id}>
                  <div>{character.name}</div>
                  <div onClick={()=> this.props.addCharacterById(character.id)}>
                    +
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

// this is the longer version instead of just passing in addCharacterId as the second argument of connect function

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch);
// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
