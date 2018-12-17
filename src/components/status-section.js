import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';
import {connect} from 'react-redux';

export function StatusSection(props) {
  // const { guesses, auralStatus, guessList } = props;
  // const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount />
      <GuessList  />
      <AuralStatus />
    </section>
  );
}

// const mapStateToProps = state => ({
//   guesses : state.guesses,
//   auralStatus : state.auralStatus,
//   guessList : state.guessList
// });

export default connect()(StatusSection);