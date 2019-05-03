import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import HomeComponent from './Components/HomeComponent'
import LoginComponent from './Components/LoginComponent'

class NavigationDrawerStructure extends React.Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  }

  render() {
    return(
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image source={require('./assets/images/drawer.png')}
            style={{width:25, height: 25, marginLeft: 5}}
          ></Image>
        </TouchableOpacity>
      </View>
    )
  }
}
const OptionOne = createStackNavigator({
  Home: {
    screen: HomeComponent,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff'
    })
  }
})

const OptionTwo = createStackNavigator({
  Login: {
    screen: LoginComponent,
    navigationOptions: ({navigation}) => ({
      title: 'Login',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#FF9800'
      },
      headerTintColor: '#fff'
    })
  }
})
const DrawerNavigation = createDrawerNavigator({
  Screen1: {
    screen: OptionOne,
    navigationOptions: {
      drawerLabel: 'Inicio'
    }
  },
  Screen2: {
    screen: OptionTwo,
    navigationOptions: {
      drawerLabel: 'Login'
    }
  }
})
export default createAppContainer(DrawerNavigation)