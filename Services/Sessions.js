import React from 'react'
import { AsyncStorage } from 'react-native'

const Setter = {
  async setSession (user) {
    await AsyncStorage.setItem('myApp', user)
  },

  async distroy () {
    await AsyncStorage.clear()
  }
}
const Getter = {
  async getSession () {
    return await AsyncStorage.getItem('myApp')
  }
}
export default {
  Setter,
  Getter
}