import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function QuizFinish ({ score, totalQuestions, navigateNextQuiz, navigateQuizMenu }) {
  const numberCorrect = Object.keys(score).reduce((sum, index) => {
    return sum + score[index]
  }, 0)

  return (
    <View>
      <Text>
        correct
        Correct: {numberCorrect} / {totalQuestions}
      </Text>
      <TouchableOpacity onPress={() => navigateNextQuiz(true)}>
        <Text>
          Restart Quiz
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateQuizMenu()}>
        <Text>
          Back to Deck
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default QuizFinish
