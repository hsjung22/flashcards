import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function CorrectIncorrect({ handleCorrect, handleIncorrect }) {
  return (
    <View>
      <TouchableOpacity onPress={() => { handleCorrect() }}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { handleIncorrect() }} >
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
  )
}

export default CorrectIncorrect
