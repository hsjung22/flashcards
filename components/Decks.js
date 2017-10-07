import React, { Component } from 'react'
import { View, Text, StyleSheet, List, FlatList } from 'react-native'
import { fetchDecks } from '../utils/api'
import { danger } from '../utils/colors'
import Deck from './Deck'

class Decks extends Component {
  componentDidMount() {
    fetchDecks().then((data) => {
        this.props.receiveDecks(JSON.parse(data))
    })
  }

  render() {
    const { decks } = this.props

    return (
      decks && Object.keys(decks).length > 0 ? (
        <View style={styles.container}>
          <FlatList
            data={Object.keys(decks).map(deck => decks[deck])}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <Deck key={item.title} deck={item} navigation={this.props.navigation} />
            )}
          />
        </View>
      ) : (
        <View style={styles.noDecksContainer}>
          <Text style={styles.noDecksText}>No decks available</Text>
        </View>
      )
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  noDecksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDecksText: {
    color: danger,
    fontSize: 20,
  }
})

export default Decks
