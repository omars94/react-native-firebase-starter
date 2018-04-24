import LoginForm from "./loginForm";
import {Container, Content} from "native-base";
import React, { Component } from "react";
import {
	Image,
	KeyboardAvoidingView,
	StyleSheet,
} from "react-native";
// import { Icon } from "react-native-elements";
import firebase from "react-native-firebase";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			auth: false,
			user: null
		};
		this.handleOnTryLogin = this.handleOnTryLogin.bind(this);
	}

	handleOnTryLogin(credentials) {
		firebase
			.auth()
			.signInAndRetrieveDataWithEmailAndPassword(
				credentials.id,
				credentials.pwd
			)
			.then(data => {
				this.setState(
					{
						auth: true,
						user: data.user
					},
					() => {
						console.log(this.state);
					}
				);
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorMessage);
			});
	}

	render() {
		return (
			<Container>
					<Content style={{padding:20}}>
						<LoginForm onTryLogin={this.handleOnTryLogin} />
					</Content>
			</Container>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2c3e50"
	},
	loginContainer: {
		alignItems: "center",
		flexGrow: 1,
		justifyContent: "center"
	},
	logo: {
		position: "absolute",
		width: 300,
		height: 100
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
