import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Quiz extends Component {
  render() {
    const {
      questions,
      index,
    } = this.props.navigation.state.params
    const currentQuiz = questions[index]

    return (
      <View>
        <Text>
          Question: {currentQuiz.question}
        </Text>

        {questions.length - 1 === index
          ? <Text> no more questions left... </Text>
          : <TouchableOpacity
              onPress={() => { this.props.navigation.navigate(
                'Quiz',
                {
                  questions: questions,
                  index: index + 1,
                }
              ) }}
            >
              <Text>Next</Text>
            </TouchableOpacity>}
      </View>
    )
  }
}

export default Quiz
