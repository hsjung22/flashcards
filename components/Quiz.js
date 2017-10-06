import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
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
        <View style={styles.container}>
          <View style={{ flex: 1, alignSelf: 'flex-start', }}>
            <Text style={styles.counter}>
              {index + 1}/{questions.length}
            </Text>
          </View>
          <View style={{ flex: 3 }}>
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
          </View>
          <View style={{ flex: 2 }}>
            <CorrectIncorrect
              handleCorrect={this.handleCorrect}
               handleIncorrect={this.handleIncorrect}
             />
           </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  counter: {
    fontSize: 20,
  },
})

export default Quiz
