import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { fetchDecks } from '../utils/api'
import Deck from './Deck'

class Decks extends Component {
  componentDidMount() {
    fetchDecks().then((data) => {
        this.props.receiveDecks(JSON.parse(data))
    })
  }

  render() {
    const { decks } = this.props

    console.log('decks', JSON.stringify(decks));

    return (
      decks ? (
        <View>
          {Object.keys(decks).map(deck =>
            <Deck key={deck} deck={decks[deck]} navigation={this.props.navigation} />
          )}
        </View>
      ) : (
        <View>
          <Text>No decks available</Text>
        </View>
      )
    )
  }
}

export default Decks
