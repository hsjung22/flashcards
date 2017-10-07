import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, black } from '../utils/colors'

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
        <Text style={{ color: black }}>
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
    borderBottomColor: black,
    borderBottomWidth: 0.5,
    backgroundColor: white,
  },
  deckTitle: {
    color: black,
    fontSize: 30,
    textAlign: 'center',
  },
})

export default Deck
