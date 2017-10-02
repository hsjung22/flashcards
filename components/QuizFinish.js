import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function QuizFinish ({ score }) {
  return (
    <View>
      <Text>
        Correct: {score.correct}
      </Text>
      <Text>
        Incorrect: {score.incorrect}
      </Text>
    </View>
  )
}

export default QuizFinish
