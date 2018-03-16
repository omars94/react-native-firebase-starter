import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pwd: "",
      pressed: false
    };
  }

  tryLogin() {
    this.props.onTryLogin({
      id: this.state.id,
      pwd: this.state.pwd
    });
  }

  trySignUp() {
    this.props.onTrySignUp({
      pressed: true
    });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          underlineAndroidColor="transparent"
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={id => {
            this.setState({ id: id });
          }}
          placeholder="ex: hello@g.com"
          placeholderTextColor="rgba(225,225,225,0.7)"
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          underlineAndroidColor="transparent"
          ref={input => (this.passwordInput = input)}
          placeholder="******"
          onChangeText={pwd => {
            this.setState({ pwd: pwd });
          }}
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.trySignUp();
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.tryLogin();
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});
