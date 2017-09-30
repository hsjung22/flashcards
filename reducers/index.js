import { RECEIVE_DECK, RECEIVE_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks
    case RECEIVE_DECK:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}

export default decks
