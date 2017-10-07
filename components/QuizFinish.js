import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { black, white } from '../utils/colors'

function QuizFinish ({ score, totalQuestions, navigateNextQuiz, navigateQuizMenu }) {
  const numberCorrect = Object.keys(score).reduce((sum, index) => {
    return sum + score[index]
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        Score: {numberCorrect}/{totalQuestions}
      </Text>
      <TouchableOpacity
        onPress={() => navigateNextQuiz(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Restart Quiz
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateQuizMenu()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Back to Deck
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 20,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    width: 200,
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black,
  },
  buttonText: {
    color: black,
    fontSize: 20,
  },
})

export default QuizFinish
