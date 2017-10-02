import { combineReducers } from 'redux';
import decks from './decksReducer'
import score from './scoreReducer'

export default combineReducers({
  decks,
  score,
})
