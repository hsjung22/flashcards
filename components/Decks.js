import React, { Component } from 'react'
import { View, Text, StyleSheet, List, FlatList } from 'react-native'
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
    const decksArray = Object.keys(decks).map(deck => decks[deck])

    return (
      decks ? (
        <View style={styles.column}>
          <FlatList
            data={decksArray}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <Deck key={item.title} deck={item} navigation={this.props.navigation} />
            )}
          />
        </View>
      ) : (
        <View>
          <Text>No decks available</Text>
        </View>
      )
    )
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})

export default Decks
