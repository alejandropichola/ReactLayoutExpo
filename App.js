import React from 'react'
import DrawerNavigation from './Router/Router'
import {View, Text} from 'react-native'
import {LoginComponent} from './Components/LoginComponent'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

class app extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer()
  }

  render () {
    return (
      <View>
        <LoginComponent/>
      </View>
    )
  }
}

export default createAppContainer(DrawerNavigation)