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
      <KeyboardAvoidingView behavior='padding' style={styles.column}>
        <Text style={styles.question}>
          What is the title of your new deck?
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
  column: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  question: {
    marginTop: 40,
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    margin: 50,
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
})

export default NewDeck
