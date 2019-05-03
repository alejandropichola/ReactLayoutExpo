import React from 'react'
import { Text, View } from 'react-native'

class HomeComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
export default HomeComponent;