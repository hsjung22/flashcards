import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { createCard } from '../utils/api'

class NewCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Card'
  })

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
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Question'
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styles.input}
          placeholder='Answer'
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
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
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    margin: 10,
  },
  button: {
    margin: 10,
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

export default NewCard
