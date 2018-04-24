/* @flow */

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';


export default class createAnnouncement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      photo: ""
    }
  }
  render() {
    return (<View style={styles.container}>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Post title:</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="Post title" onChangeText={(title) => this.setState({title: title})}/>
        </View>
      </View>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Post Description:</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="enter description here" multiline={true} numberOfLines={4} onChangeText={(text) => this.setState({description: text})} value={this.state.text}/>
        </View>
      </View>
      <PhotoUpload onPhotoSelect={avatar => {
          if (avatar) {
            console.log('Image base64 string: ', avatar)
          }
        }}>
        <Image style={{
            paddingVertical: 30,
						marginVertical:10,
            width: 150,
            height: 15,
          }} resizeMode="cover" source={{
            uri: "http://via.placeholder.com/750x300?text=Upload+Image"
          }}/>
      </PhotoUpload>
      <View style={{
          width: "50%",
          alignItems: "stretch",
          paddingBottom: 10
        }}>
      <Button color="#f0932b" title="Create Now"/>
    </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  textAndTextInputContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2.5
  },
  textContainer: {
    width: '100%',
    marginBottom: 5
  },
  textInputContainer: {
    width: '100%',
    borderColor: '#48BBEC',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 5
  }
});
