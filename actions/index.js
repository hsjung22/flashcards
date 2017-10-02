export const RECEIVE_DECK = 'RECEIVE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_CARD = 'RECEIVE_CARD'
export const RECEIVE_CORRECT = 'RECEIVE_CORRECT'
export const RECEIVE_INCORRECT = 'RECEIVE_INCORRECT'
export const RESET_SCORE = 'RESET_SCORE'

export function receiveDeck (deck) {
  return ({
    type: RECEIVE_DECK,
    deck,
  })
}

export function receiveDecks (decks) {
  return ({
    type: RECEIVE_DECKS,
    decks,
  })
}

export function receiveCard (title, card) {
  return ({
    type: RECEIVE_CARD,
    title,
    card,
  })
}

export function receiveCorrect(nth) {
  return ({
    type: RECEIVE_CORRECT,
    nth,
  })
}

export function receiveIncorrect(nth) {
  return ({
    type: RECEIVE_INCORRECT,
    nth,
  })
}

export function resetScore(nth) {
  return ({
    type: RESET_SCORE,
    nth,
  })
}
