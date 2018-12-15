
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
    return state;
};