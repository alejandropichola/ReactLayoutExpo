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

class LoginComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {}
    }
  }

  onFocus () {
    const state = this.state
    this.state.style = {
      backgroundColor: '#5388d0'
    }
    this.setState({state})
  }
  onBlur () {
    const state = this.state
    this.state.style = {}
    this.setState({state})
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
          <TextInput style={[style.inputType, this.state.style]}
                     onFocus={() => this.onFocus()}
                     onBlur={() => this.onBlur()}
                     placeholder="Ingrese usuario"
          />
          <TextInput style={style.inputType}
                     placeholder="Ingrese contraseña"
                     secureTextEntry={true}
          />
          <Button title='Entrar' onPress={this.submitForm}/>
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