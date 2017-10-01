import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Question ({ currentQuiz, handleModeChange }) {
  return (
    <View>
      <Text>
        Question: {currentQuiz.question}
      </Text>
      <TouchableOpacity onPress={() => handleModeChange('answer')}>
        <Text>
          Answer
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Question
