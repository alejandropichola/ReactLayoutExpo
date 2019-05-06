import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Keyboard,
  Alert
} from 'react-native'
import InputTextComponent from './Common/InputTextComponent'

class LoginComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {}
    }
  }
  submitForm = () => {
    Keyboard.dismiss()
  }

  render () {
    return (
      <View>
        <View style={style.container}>
          <Text>{`\n`}</Text>
          <Text style={style.titleLogin}>Iniciar sesión</Text>
          <InputTextComponent label='Usuario'
                              placeHolder='Ingrese texto'
                              note=''
                              MessageError=''
                              secure={false}
          />
          <InputTextComponent label='Contraseña'
                              placeHolder='Ingrese contraseña'
                              note=''
                              MessageError=''
                              secure={true}
          />
          <Text>{`\n`}</Text>
          <Button title='Entrar' style={{marginTop: 2}} onPress={this.submitForm}/>
          <Text style={style.forGot} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            Recuperar contraseña?
          </Text>
        </View>
      </View>
    )
  }
}

// const AppContainer = createAppContainer(forGot)

const style = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  titleLogin: {
    textAlign: 'center',
    fontSize: 18
  },
  inputType: {
    height: 50,
    marginBottom: 2
  },
  forGot: {
    textAlign: 'center',
    marginTop: 15,
    textDecorationLine: 'underline'
  }
})
export default LoginComponent