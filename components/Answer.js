import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { black, toggle } from '../utils/colors'

function Answer ({ currentQuiz, handleModeChange }) {
  return (
    <View>
      <Text style={styles.quiz}>
        {currentQuiz.answer}
      </Text>
      <TouchableOpacity onPress={() => handleModeChange('question')}>
        <Text style={styles.toggleText}>
          Question
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  quiz: {
    marginTop: 40,
    color: black,
    fontSize: 30,
    textAlign: 'center',
  },
  toggleText: {
    marginTop: 20,
    color: toggle,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default Answer
