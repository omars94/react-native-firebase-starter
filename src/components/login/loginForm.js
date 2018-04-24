import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import {
	Text,
	Input,
	Form,
	Item,
	Label,
	Content,
	Container
} from "native-base";
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

	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>University email</Label>
							<Input
								onSubmitEditing={() => this.passwordInput.focus()}
								autoCorrect={false}
								underlineAndroidColor="transparent"
								keyboardType="email-address"
								returnKeyType="next"
								onChangeText={id => {
									this.setState({ id: id });
								}}
							/>
						</Item>
						<Form>
							<Item floatingLabel last>
								<Label>Password</Label>
								<Input
									// style={styles.input}
									returnKeyType="go"
									underlineAndroidColor="transparent"
									ref={input => (this.passwordInput = input)}
									onChangeText={pwd => {
										this.setState({ pwd: pwd });
									}}
									// placeholderTextColor="rgba(225,225,225,0.7)"
									secureTextEntry
								/>
							</Item>
						</Form>

						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this.tryLogin();
							}}
						>
							<Text style={styles.buttonText}>LOGIN</Text>
						</TouchableOpacity>
					</Form>
				</Content>
			</Container>
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
