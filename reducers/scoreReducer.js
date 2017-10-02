import {
  RECEIVE_CORRECT,
  RECEIVE_INCORRECT,
  RESET_SCORE,
} from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RESET_SCORE:
      return {}
    case RECEIVE_CORRECT:
      return {
        ...state,
        [action.nth]: 1
      }
    case RECEIVE_INCORRECT:
      return {
        ...state,
        [action.nth]: 0
      }
    default:
      return state
  }
}

export default decks
