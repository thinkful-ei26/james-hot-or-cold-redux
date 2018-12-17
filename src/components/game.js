import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import {connect} from 'react-redux';

// import store from '../store';

export class Game extends React.Component {
 
  render() {
    // const { feedback, guesses } = store.getState();
    // const guessCount = guesses.length;


    return (
      <div>
        <Header   />
        <main role="main">
          <GuessSection />
          <StatusSection  />
          <InfoSection />
        </main>
      </div>
    );
  }
}
// const mapStateToProps = (state, props) => ({
//  auralStatus : state.auralStatus
// });

export default connect()(Game);