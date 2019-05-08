import React from 'react'
import { Text, View, Image, Button } from 'react-native'

class HomeComponent extends React.Component {
  login = () => {
    this.props.navigation.navigate('Auth')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title='login' onPress={this.login}></Button>
      </View>
    );
  }
}
export default HomeComponent;