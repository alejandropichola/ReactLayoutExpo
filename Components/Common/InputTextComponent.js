import React from 'react'
import {Text, TextInput, View, StyleSheet} from 'react-native'

class InputTextComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {}
    }
  }

  onFocus () {
    const state = this.state
    this.state.style = {
      borderBottomWidth: 2,
      borderColor: '#5388d0'
    }
    this.setState({state})
  }
  onBlur () {
    const state = this.state
    this.state.style = {}
    this.setState({state})
  }
  render () {
    return(
      <View>
        <Text>{this.props.label}</Text>
        <TextInput placeholder={this.props.placeHolder}
                   style={[style.inputType, this.state.style]}
                   secureTextEntry={this.props.secure}
                   onFocus={() => this.onFocus()}
                   onBlur={() => this.onBlur()}
        />
        {this.props.note && this.props.note.length > 0 ? <Text >{this.props.note}</Text> : null}
        {this.props.MessageError && this.props.MessageError.length > 0 ? <Text >{this.props.MessageError}</Text> : null}
      </View>
    );
  }
}
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
    marginBottom: 6
  }
})
export default InputTextComponent