import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import {connect} from 'react-redux';
import { InputGuess, NewGame, Aural } from '../actions';


import store from '../store';

export class Game extends React.Component {
 
  render() {
    const { feedback, guesses } = store.getState();
    const guessCount = guesses.length;


    return (
      <div>
        <Header
          onRestartGame={() => store.dispatch(NewGame('NewGame'))}
          onGenerateAuralUpdate={() => store.dispatch(Aural())}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => store.dispatch(InputGuess(guess))}
          />
          <StatusSection guesses={guesses} 
           
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
 auralStatus : state.auralStatus
});

export default connect(mapStateToProps)(Game);