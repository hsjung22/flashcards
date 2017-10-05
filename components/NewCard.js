import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import { createCard } from '../utils/api'

class NewCard extends Component {
  _initialState = {
    question: '',
    answer: '',
  }

  state = this._initialState

  handleSubmit = () => {
    const { question, answer } = this.state
    const card = { question, answer }
    const { title } = this.props.navigation.state.params

    // save to AsyncStorage
    createCard(title, card)
    // update redux store
    this.props.receiveCard(title, card)
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
      <KeyboardAvoidingView behavior='padding'>
        <Text>
          Q?
        </Text>
        <TextInput
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <Text>
          Ans
        </Text>
        <TextInput
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default NewCard
