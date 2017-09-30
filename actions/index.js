export const RECEIVE_DECK = 'RECEIVE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

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
