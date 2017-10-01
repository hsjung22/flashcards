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
  state = {
    question: '',
    answer: '',
  }


  handleSubmit = () => {
    const { question, answer } = this.state
    const card = { question, answer }
    const { title } = this.props.navigation.state.params

    // save to AsyncStorage
    createCard(title, card)
    // update redux store
    this.props.receiveCard(title, card)
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
