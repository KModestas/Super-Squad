import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import '../styles/index.css';


class App extends Component {
  render() {
    return(
      <div className="App">
        <h2>Super Squad</h2>
        <CharacterList />
        <HeroList />
      </div>
    );
  }
}


export default App;
