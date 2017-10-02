import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function QuizFinish ({ score, totalQuestions, navigateNextQuiz }) {
  const numberCorrect = Object.keys(score).reduce((sum, index) => {
    return sum + score[index]
  }, 0)

  return (

    // TODO  'Back to Deck' buttons

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
    </View>
  )
}

export default QuizFinish
