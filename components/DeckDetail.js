import React, { Component } from 'react'
import { fetchDeck } from '../utils/api'
import { View, Text, TouchableOpacity } from 'react-native'

class DeckDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {},
    };
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params
    this.setState({ deck: fetchDeck(title) })
  }

  render() {
    const { deck } = this.state

    console.log('deck', JSON.stringify(deck));

    return (
      <View>
        <Text>
          { deck.title }
        </Text>
        <Text>
          {deck.questions && deck.questions.length} cards
        </Text>
        <TouchableOpacity
          onPress={() => {}}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckDetail
