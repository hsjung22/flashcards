import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Answer ({ currentQuiz, handleModeChange }) {
  return (
    <View>
      <Text>
        Answer: {currentQuiz.answer}
      </Text>
      <TouchableOpacity onPress={() => handleModeChange('question')}>
        <Text>
          Question
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Answer
