import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function QuizFinish ({ score, totalQuestions }) {
  const numberCorrect = Object.keys(score).reduce((sum, index) => {
    return sum + score[index]
  }, 0)

  return (
    <View>
      <Text>
        correct
        Correct: {numberCorrect} / {totalQuestions}
      </Text>
    </View>
  )
}

export default QuizFinish
