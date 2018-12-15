import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';
import {connect} from 'react-redux';

export function StatusSection(props) {
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList  />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}

const mapStateToProps = state => ({
  guesses : state.guesses,
  auralStatus : state.auralStatus
});

export default connect(mapStateToProps)(StatusSection);