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
    createDeck(title)



    // save deck then redirect

    // redirect to new deck
  }

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
