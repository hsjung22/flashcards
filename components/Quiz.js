import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Question from './Question'
import Answer from './Answer'
import CorrectIncorrect from './CorrectIncorrect'
import QuizFinish from './QuizFinish'

class Quiz extends Component {
  state = {
    mode: 'question' // 'answer'
  }

  handleModeChange = (mode) => {
    this.setState({ mode })
  }

  handleCorrect = () => {
    this.props.receiveCorrect(this.props.navigation.state.params.index)
    this.navigateNextQuiz()
  }

  handleIncorrect = () => {
    this.props.receiveIncorrect(this.props.navigation.state.params.index)
    this.navigateNextQuiz()
  }

  navigateNextQuiz = (reset = false) => {
    const {
      questions,
      index,
      title,
    } = this.props.navigation.state.params

    this.props.navigation.navigate(
      'Quiz',
       {
         title,
         questions,
         index: reset ? 0 : index + 1,
       }
    )
  }

  navigateQuizMenu = () => {
    this.props.navigation.navigate(
      'DeckMenu',
      { title: this.props.navigation.state.params.title }
    )
  }

  render() {
    const {
      questions,
      index,
    } = this.props.navigation.state.params
    const currentQuiz = questions[index]

    return (
      currentQuiz ? (
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
           <CorrectIncorrect
             handleCorrect={this.handleCorrect}
             handleIncorrect={this.handleIncorrect}
           />
        </View>
      ) : (
        <QuizFinish
          score={this.props.score}
          totalQuestions={questions.length}
          navigateNextQuiz={this.navigateNextQuiz}
          navigateQuizMenu={this.navigateQuizMenu}
        />
      )
    )
  }
}

export default Quiz
