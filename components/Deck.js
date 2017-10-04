import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { pink, purple, white } from '../utils/colors'

class Deck extends Component {
  render() {
    const { deck } = this.props
    return (
      <TouchableOpacity style={styles.deck} onPress={() => { this.props.navigation.navigate(
        'DeckMenu',
        { title: deck.title }
      )}}>
        <Text style={styles.deckTitle}>
          { deck.title }
        </Text>
        <Text>
          { deck.questions.length } cards
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    marginBottom: 10,
    backgroundColor: '#e76e63',
  },
  deckTitle: {
    color: white,
    fontSize: 30,
    textAlign: 'center',
  },

})

export default Deck
