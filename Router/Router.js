import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity,Alert } from 'react-native'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import HomeComponent from '../Components/HomeComponent'
import LoginComponent from '../Components/LoginComponent'
import ForgotPasswordComponent from '../Components/ForgotPasswordComponent'

class NavigationDrawerStructure extends React.Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer()
    }
  
    render () {
      return (
        <View style={style.container}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image source={require('../assets/images/drawer.png')}
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
    ScreenHome: {
      screen: OptionTwo,
      navigationOptions: {
        drawerLabel: 'Inicio',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    ScreenLogin: {
      screen: OptionOne,
      navigationOptions: {
        drawerLabel: 'Iniciar sesión',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-log-in" size={24} style={{ color: tintColor }} />
        ),
      }
    },
    /*ScreenLogOut: {
      screen: Alert.alert('cerrar'),
      navigationOptions: {
        drawerLabel: 'Cerrar Seción'
      }
    },*/
  }, {
    initialRouteName: 'ScreenLogin'
  })
  const style = StyleSheet.create({
    container: {
      marginLeft: 10,
      marginRight: 10,
    }
  })
  export default DrawerNavigation