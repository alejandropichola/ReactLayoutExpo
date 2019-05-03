import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import HomeComponent from './Components/HomeComponent'
import LoginComponent from './Components/LoginComponent'
import ForgotPasswordComponent from './Components/ForgotPasswordComponent'

class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer()
  }

  render () {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image source={require('./assets/images/drawer.png')}
                 style={{ width: 25, height: 25, marginLeft: 5 }}
          ></Image>
        </TouchableOpacity>
      </View>
    )
  }
}

const OptionTwo = createStackNavigator({
  Home: {
    screen: HomeComponent,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#5388d0'
      },
      headerTintColor: '#fff'
    })
  }
})

const OptionOne = createStackNavigator({
  Login: {
    screen: LoginComponent,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#5388d0'
      },
      headerTintColor: '#fff'
    })
  },
  ForgotPassword: {
    screen: ForgotPasswordComponent,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5388d0'
      },
      headerTintColor: '#fff'
    })
  }
}, { initialRouteName: 'Login'})
const DrawerNavigation = createDrawerNavigator({
  Screen1: {
    screen: OptionOne,
    navigationOptions: {
      drawerLabel: 'Login'
    }
  },
  Screen2: {
    screen: OptionTwo,
    navigationOptions: {
      drawerLabel: 'Inicio'
    }
  }
})
export default createAppContainer(DrawerNavigation)