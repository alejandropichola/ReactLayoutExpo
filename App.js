import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import RouteNotAuthentication from './Components/RouteNotAuth/RouteNotAuth'

const appNavigator = createStackNavigator({
  Home: {
    screen: RouteNotAuthentication
  }
})

export default createAppContainer(appNavigator)