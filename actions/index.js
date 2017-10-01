export const RECEIVE_DECK = 'RECEIVE_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_CARD = 'RECEIVE_CARD'

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
