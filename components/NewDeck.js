import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import { createDeck } from '../utils/api'

class NewDeck extends Component {
  state = {
    title: ''
  }

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

    // save deck then redirect

    // redirect to new deck
  }

  // submit = () => {
  //   const key = timeToString()
  //   const entry = this.state
  //   // update redux store
  //   this.props.dispatch(addEntry({
  //     [key]: entry
  //   }))
  //   // reset component state
  //   this.setState(this._initialState)
  //   this.toHome()
  //   // save to AsyncStorage
  //   submitEntry({ key, entry })
  //
  //   clearLocalNotification()
  //     .then(setLocalNotification)
  // }


  // <TouchableOpacity onPress={() => { this.props.navigation.navigate(
  //   'DeckDetail',
  //   { title: deck.title }
  // )}}>

  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>
          What is the title of your new deck?
        </Text>
        <TextInput
          value={this.state.title}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default NewDeck
