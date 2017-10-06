import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Question ({ currentQuiz, handleModeChange }) {
  return (
    <View>
      <Text style={styles.quiz}>
        {currentQuiz.question}
      </Text>
      <TouchableOpacity onPress={() => handleModeChange('answer')}>
        <Text style={styles.toggleText}>
          Answer
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  quiz: {
    marginTop: 40,
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  toggleText: {
    marginTop: 20,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default Question
