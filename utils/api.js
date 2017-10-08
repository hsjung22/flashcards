import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

function fetchDeck(title) {
  return fetchDecks().then(data => JSON.parse(data)[title])
}

export function createDeck(newDeck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeck))
}

export function createCard(title, card) {

  fetchDeck(title).then((deck) => {
    const newDeck = {
      ...deck,
      questions: [
        ...deck.questions,
        card
      ]
    }
    return createDeck({ [title]: newDeck })
  })
}
