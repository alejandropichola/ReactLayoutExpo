import React from 'react'
import {StyleSheet, View, Button, Text, TextInput, Keyboard} from 'react-native'

class ForgotPasswordComponent extends React.Component {
  forgotPass() {
    Keyboard.dismiss()
  }
  render() {
    return(
      <View>
        <View>
          <Text>Recuperar contraseña?</Text>
          <TextInput style={style.inputType}
                     placeholder='Ingrese correo eléctronico'/>
          <Button title='Enviar' onPress={this.forgotPass}></Button>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  inputType: {
    height: 50,
    marginBottom: 2
  },
})
export default ForgotPasswordComponent