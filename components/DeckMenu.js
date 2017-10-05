import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class DeckMenu extends Component {
  render() {
    const { deck } = this.props
    const title = deck.title
    const questions = deck.questions

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckTitle}>
            { title }
          </Text>
          <Text style={styles.cardsCount}>
            {questions && questions.length} cards
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => { this.props.navigation.navigate(
              'NewCard',
              { title }
            ) }}
          >
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuButton, { backgroundColor: 'black' }]}
            onPress={() => { this.props.navigation.navigate(
              'Quiz',
              {
                title,
                questions,
                index: 0,
              }
            ) }}
          >
            <Text style={[styles.buttonText, { color: 'white' }]}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  deckTitle: {
    color: 'black',
    fontSize: 36,
    textAlign: 'center',
  },
  cardsCount: {
    color: 'gray',
    fontSize: 24,
    textAlign: 'center',
  },
  menuButton: {
    alignItems: 'center',
    width: 200,
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 20,
  },
})

export default DeckMenu
