import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { createDeck } from '../utils/api'
import { black, danger, white } from '../utils/colors'

class NewDeck extends Component {
  _initialState = {
    title: ''
  }

  state = this._initialState

  handleTextChange = (title) => {
    this.setState({ title })
  }

  handleSubmit = () => {
    const { title } = this.state
    const newDeck = {
      [title]: {
        title,
        questions: [],
      }
    }

    // save to AsyncStorage
    createDeck(newDeck)
    // update redux store
    this.props.receiveDeck(newDeck)
    // reset state
    this.setState(this._initialState)
    // redirect to new deck
    this.props.navigation.navigate(
      'DeckMenu',
      { title }
    )
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.question}>
          Name your deck!
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.title}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    color: black,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: black,
    borderRadius: 7,
    margin: 10,
  },
  button: {
    padding: 10,
    backgroundColor: black,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  },
})

export default NewDeck
