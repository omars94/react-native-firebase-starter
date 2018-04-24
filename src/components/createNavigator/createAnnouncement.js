/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class createAnnouncement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: ""
    }
  }
  render() {
    return (<View style={styles.container}>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Announcement title:</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="announcement name" onChangeText={(title) => this.setState({title: title})}/>
        </View>
      </View>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Announcement Description:</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="enter description here" multiline={true} numberOfLines={4} onChangeText={(text) => this.setState({description: text})} value={this.state.text}/>
        </View>
      </View>
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
