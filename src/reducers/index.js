
const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    show: false
};

export const reducer = (state=initialState, action)=>{
   
    if(action.type === 'NewGame'){
           let newState = {
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: Math.floor(Math.random() * 100) + 1
            };
            return newState;
    }
   
    if(action.type === 'InputGuess'){
        // validate
        let guess = parseInt(action.guesses, 10);
            if (isNaN(guess)) {
              return ({ feedback: 'Please enter a valid number' });
            }
            const difference = Math.abs(guess - state.correctAnswer);
            let feedback;
            if (difference >= 50) {
              feedback = 'You\'re Ice Cold...';
            } else if (difference >= 30) {
              feedback = 'You\'re Cold...';
            } else if (difference >= 10) {
              feedback = 'You\'re Warm.';
            } else if (difference >= 1) {
              feedback = 'You\'re Hot!';
            } else {
              feedback = 'You got it!';
            }
         
            document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
        const newState = Object.assign({}, state, {feedback, guesses: [...state.guesses, guess]});
        return newState;   
    }
   if(action.type === 'Show'){
       const newState = Object.assign({}, state, { show: !state.show});
       return newState;
   }

   if(action.type === 'Aural'){
      const { guesses, feedback } = state;
    
      //   // If there's not exactly 1 guess, we want to
      //   // pluralize the nouns in this aural update.
        const pluralize = guesses.length !== 1;
    
        let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
    
         if (guesses.length > 0) {
          auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
         }
         const newState = Object.assign({}, state, { auralStatus: auralStatus});
         return newState;
     
      
   }
    return state;
};