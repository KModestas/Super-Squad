import React, { Component } from 'react';
import { connect } from 'ract-redux';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Squad:</h4>
        <ul className="list-group">
          { this.props.heroes.map( hero => {
            return (
              <li className="list-group-item" key={hero.id}>
                <div className="list-item">
                  {hero.name}
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
