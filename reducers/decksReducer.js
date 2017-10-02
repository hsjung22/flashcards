import {
  RECEIVE_DECK,
  RECEIVE_DECKS,
  RECEIVE_CARD,
} from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks
    case RECEIVE_DECK:
      return {
        ...state,
        ...action.deck
      }
    case RECEIVE_CARD:
      const { title } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [
            ...state[title].questions,
            action.card
          ]
        }
      }
    default:
      return state
  }
}

export default decks
