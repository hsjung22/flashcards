import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Question from './Question'
import Answer from './Answer'

class Quiz extends Component {
  state = {
    mode: 'question' // 'answer'
  }

  handleModeChange = (mode) => {
    this.setState({ mode })
  }

  render() {
    const {
      questions,
      index,
    } = this.props.navigation.state.params
    const currentQuiz = questions[index]

    return (
      <View>
        <Text>
          {index + 1} / {questions.length}
        </Text>

        {this.state.mode === 'question' ? (
          <Question
            currentQuiz={currentQuiz}
            handleModeChange={this.handleModeChange}
          />
        ) : (
          <Answer
            currentQuiz={currentQuiz}
            handleModeChange={this.handleModeChange}
          />
        )}

        {questions.length - 1 === index
          ? <Text> no more questions left...(Done screen) </Text>
          : <TouchableOpacity
              onPress={() => { this.props.navigation.navigate(
                'Quiz',
                {
                  questions: questions,
                  index: index + 1,
                }
              ) }}
            >
              <Text>Correct/Incorrect</Text>
            </TouchableOpacity>}
      </View>
    )
  }
}

export default Quiz
