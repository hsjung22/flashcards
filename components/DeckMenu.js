import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class DeckMenu extends Component {
  render() {
    const { deck } = this.props
    const title = deck.title
    const questions = deck.questions

    return (
      <View>
        <Text>
          { title }
        </Text>
        <Text>
          {questions && questions.length} cards
        </Text>

        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate(
            'NewCard',
            { title }
          ) }}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate(
            'Quiz',
            {
              title,
              questions,
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
