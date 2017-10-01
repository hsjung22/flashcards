import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { View, Platform, StatusBar } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { pink, purple, white } from './utils/colors'
import DefaultStatusBar from './components/DefaultStatusBar'
import DecksContainer from './containers/DecksContainer'
import NewDeckContainer from './containers/NewDeckContainer'
import DeckMenuContainer from './containers/DeckMenuContainer'
import NewCardContainer from './containers/NewCardContainer'
import Quiz from './components/Quiz'

const Tabs = TabNavigator({
  Decks:{
    screen: DecksContainer,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  NewDeck:{
    screen: NewDeckContainer,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckMenu: {
    screen: DeckMenuContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  NewCard: {
    screen: NewCardContainer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <DefaultStatusBar backgroundColor={pink} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
