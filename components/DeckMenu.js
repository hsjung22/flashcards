import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DeckMenu extends Component {
  render() {
    const { deck } = this.props
    return (
      <View>
        <Text>
          { deck.title }
        </Text>
        <Text>
          {deck.questions && deck.questions.length} cards
        </Text>

        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate(
            'NewCard',
            { title: deck.title }
          ) }}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate(
            'Quiz',
            {
              questions: deck.questions,
              index: 0,
            }
          ) }}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckMenu
