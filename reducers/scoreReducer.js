import {
  RECEIVE_CORRECT,
  RECEIVE_INCORRECT,
  RESET_SCORE,
} from '../actions'

const defaultState = {
  correct: 0,
  incorrect: 0,
}

function decks (state = defaultState, action) {
  switch (action.type) {
    case RESET_SCORE:
      return defaultState
    case RECEIVE_CORRECT:
      return {
        ...state,
        correct: ++state.correct,
      }
    case RECEIVE_INCORRECT:
      return {
        ...state,
        incorrect: --state.correct,
      }
    default:
      return state
  }
}

export default decks
