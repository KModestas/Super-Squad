import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {

  render() {
    return(
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength</b>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.props
  };
}

export default connect(mapStateToProps, )(SquadStats);
