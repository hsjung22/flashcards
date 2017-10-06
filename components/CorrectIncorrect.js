import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function CorrectIncorrect({ handleCorrect, handleIncorrect }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => { handleCorrect() }}
        style={[styles.button, { backgroundColor: 'green' }]}
      >
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { handleIncorrect() }}
          style={[styles.button, { backgroundColor: 'red' }]}
        >
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
})

export default CorrectIncorrect
