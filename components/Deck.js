import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  render() {
    const { deck } = this.props
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate(
        'DeckDetail',
        { title: deck.title }
      )}}>
        <Text>
          { deck.title }
        </Text>
        <Text>
          { deck.questions.length } cards
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Deck
