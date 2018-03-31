import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

export default class createJob extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      jobTitle: "",
      location: "",
      date: "",
      description: "",
      photo: ""

    }
  }

  componentDidUpdate() {
    console.log('details: ', this.state.title + " " + this.state.date + " " + this.state.description);
  }

  render() {
    return (<View style={styles.container}>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Title</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="Title" onChangeText={(title) => this.setState({title: title})}/>
        </View>
      </View>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Job Title</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="Job Title" onChangeText={(jobTitle) => this.setState({jobTitle: jobTitle})}/>
        </View>
      </View>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Work Location:</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="work location" onChangeText={(location) => this.setState({location: location})} keyboardType="numeric"/>
        </View>
      </View>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Job Description:</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="enter description here" multiline={true} numberOfLines={4} onChangeText={(text) => this.setState({description: text})} value={this.state.text}/>
        </View>
      </View>
      <View style={styles.textAndTextInputContainer}>
        <View style={styles.textContainer}>
          <Text>Deadline</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput underlineColorAndroid={'transparent'} placeholder="deadline" onChangeText={(deadline) => this.setState({deadline: deadline})}/>
        </View>
      </View>
      <PhotoUpload onPhotoSelect={avatar => {
          if (avatar) {
            console.log('Image base64 string: ', avatar)
          }
        }}>
        <Image style={{
            paddingVertical: 30,
            marginVertical: 10,
            width: 150,
            height: 15
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
    </View>)
  }
}
const styles = StyleSheet.create({
  textAndTextInputContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  textContainer: {
    width: '25%'
  },
  textInputContainer: {
    width: '75%',
    borderColor: '#48BBEC',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 5
  }
})
