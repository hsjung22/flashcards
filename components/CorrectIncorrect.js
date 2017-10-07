import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { success, danger, white } from '../utils/colors'

function CorrectIncorrect({ handleCorrect, handleIncorrect }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => { handleCorrect() }}
        style={[styles.button, { backgroundColor: success }]}
      >
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { handleIncorrect() }}
          style={[styles.button, { backgroundColor: danger }]}
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
    margin: 10,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  },
})

export default CorrectIncorrect
