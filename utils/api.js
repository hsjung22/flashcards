// export function fetchDecks() {
//   return (
//     {
//       React: {
//         title: 'React',
//         questions: [
//           {
//             question: 'What is React?',
//             answer: 'A library for managing user interfaces'
//           },
//           {
//             question: 'Where do you make Ajax requests in React?',
//             answer: 'The componentDidMount lifecycle event'
//           }
//         ]
//       },
//       JavaScript: {
//         title: 'JavaScript',
//         questions: [
//           {
//             question: 'What is a closure?',
//             answer: 'The combination of a function and the lexical environment within which that function was declared.'
//           }
//         ]
//       }
//     }
//   )
// }
import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'Flashcards:deck'

export function fetchDecks() {
  // return AsyncStorage.clear()
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function fetchDeck(deck) {
  return {}
  // return fetchDecks()[deck]
}

export function createDeck(title) {
  return  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    }
  }))
}
