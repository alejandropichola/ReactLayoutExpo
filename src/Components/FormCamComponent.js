import React from 'react'
import {
  View, Text, Keyboard, Image,
  KeyboardAvoidingView, CameraRoll
} from 'react-native'
import { Input, Button } from 'react-native-elements'

import { Ionicons } from '@expo/vector-icons'
import { Camera, Permissions, ImagePicker } from 'expo'
import { containerMargin } from '../../assets/Styles'

class FormCamComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasCameraPermissions: null,
      hasCameraRollPermissions: null,
      type: Camera.Constants.Type.Back,
      image: null
    }
  }

  async componentDidMount () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    this.setState({ hasCameraPermissions: status === 'granted' })
    this.setState({ hasCameraRollPermissions: statusRoll === 'granted' })
  }

  pickerPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
    })
    console.log(result)
    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }

  pickerCam = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowEditing: true,
      exif: true
    })
    if (!result.cancelled) {
      this.setState({ image: result.uri })
      // CameraRoll.saveToCameraRoll(this.state.image)
    }
  }

  getBase64ImageFromUrl = () => {
    return fetch(unescape(this.state.image))
      .then((response) => {
        return response.blob()
      })
      .then((data) => {
        console.log(data)
      })
  }

  saveImage = () => {
    this.getBase64ImageFromUrl()
  }

  render () {
    let { image } = this.state
    return (
      <KeyboardAvoidingView style={containerMargin} behavior='position'
                            keyboardVerticalOffset={-25}>
        <Ionicons
          onPress={this.pickerPhoto}
          name="md-photos" size={34}
        />
        <Ionicons
          onPress={this.pickerCam}
          name="md-camera" size={34}
        />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }}/>}
        <Button title='Subir' onPress={this.saveImage}></Button>
      </KeyboardAvoidingView>
    )
  }
}

export default FormCamComponent
