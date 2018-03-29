import React from 'react';
import { Button, Image, Text, TextInput, View, StyleSheet } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

export default class createEvent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      date: "",
      description: "",
      photo: ""

    }
  }

  componentDidUpdate() {
    console.log('details: ', this.state.title + " " + this.state.date + " " + this.state.description );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.textAndTextInputContainer}>
        <Text>Event title</Text>
        <TextInput
          placeholder="event name"
          onChangeText={(title) => this.setState({title: title})}
        />
      </View>
        <Text>Event Date:</Text>
        <TextInput
          placeholder="07-01-2018"
          onChangeText={(date) => this.setState({date: date})}
          keyboardType="numeric" />
        <Text>Event Description: </Text>
        <TextInput
          placeholder="enter description here"
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text) => this.setState({description: text})}
          value={this.state.text}
        />
        <Text>Event Date:</Text>
        <TextInput
          placeholder="07-01-2018"
          onChangeText={(date) => this.setState({date: date})}
          keyboardType="numeric"
        />
        <PhotoUpload
          onPhotoSelect={avatar => {
           if (avatar) {
             console.log('Image base64 string: ', avatar)
           }
          }}
          >
           <Image
             style={{
               paddingVertical: 30,
               width: 150,
               height: 150,
               borderRadius: 75
             }}
             resizeMode='cover'
             source={{
               uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
             }}
           />
        </PhotoUpload>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  textAndTextInputContainer:{
		flex:1,
		flexDirection:'row',
		paddingHorizontal: 10,
		paddingVertical: 2.5
	},
  textContainer: {
		width:'25%'
	},
  textInputContainer: {
		width: '75%'
	}
})
