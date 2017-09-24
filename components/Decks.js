import React, { Component } from 'react'
import { View } from 'react-native'
import { fetchDecks } from '../utils/api'
import Deck from './Deck'

class Decks extends Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    this.setState({ decks: fetchDecks() })
  }

  render() {
    const { decks } = this.state

    return (
      <View>
        {Object.keys(decks).map(deck =>
          <Deck key={deck} deck={decks[deck]} navigation={this.props.navigation} />
        )}
      </View>
    )
  }
}

export default Decks
