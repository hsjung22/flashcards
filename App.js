import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { pink } from './utils/colors';
import DefaultStatusBar from './components/DefaultStatusBar';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <DefaultStatusBar backgroundColor={pink} barStyle='light-content' />
        <Text>Hello</Text>
      </View>
    );
  }
}
