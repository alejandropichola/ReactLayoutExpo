import React from 'react'
import { View, Button, Text, Keyboard } from 'react-native'
import InputTextComponent from './Common/InputTextComponent'
import { containerMargin } from '../assets/Styles'
import {titleOne} from '../assets/Styles'

class ForgotPasswordComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null
    }
  }
  forgotPass () {
    Keyboard.dismiss()
  }

  render () {
    return (
      <View>
        <View style={containerMargin}>
          <Text>{`\n`}</Text>
          <Text style={titleOne}>Recuperar contraseña</Text>
          <InputTextComponent label='Correo'
                              onChangeText={(email) => this.setState({email})}
                              value={this.props.email}
                              placeHolder='Ingrese correo'
                              secure={false}
                              iconLeft='md-mail'
                              sizeIcon={18}
          />
          <Text>{`\n`}</Text>
          <Button title='Enviar' onPress={this.forgotPass}></Button>
        </View>
      </View>
    )
  }
}

export default ForgotPasswordComponent