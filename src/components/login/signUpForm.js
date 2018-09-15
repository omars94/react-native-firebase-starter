import React, { Component } from "react";
import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
	Text,
	Input,
	Form,
	Item,
	Label,
	Content,
	Container,
	Picker,
	Button
} from "native-base";
import firebase from "react-native-firebase";
import DatePicker from "react-native-datepicker";
import RNFetchBlob from "react-native-fetch-blob";
import CameraRollPicker from "react-native-camera-roll-picker";
import Gallery from "./Gallery";
import { StackNavigator } from "react-navigation";

class SignUpForm extends Component {
	constructor(props) {
		super(props);
		var today = new Date(),
			date =
				today.getFullYear() +
				"-" +
				(today.getMonth() + 1) +
				"-" +
				today.getDate();

		this.state = {
			date: date,
			userType: "student",
			universityID: "",
			phoneN: "",
			emailAddress: "",
			major: "",
			birthDate: date,
			gender: "",
			profilePhoto: "",
			pwd: "",
			retypepwd: "",
			fullName: "",
			auth: "false",
			user: "0"
		};
		signUp = this.signUp.bind(this);
	}

	signUp() {
		var reg1 = /.*(@student.bau.edu.lb)$/i;
		var reg2 = /.*(@bau.edu.lb)$/i;

		if (
			this.state.emailAddress.match(reg1) ||
			this.state.emailAddress.match(reg2)
		) {
			firebase
				.auth()
				.createUserAndRetrieveDataWithEmailAndPassword(
					this.state.emailAddress,
					this.state.pwd
				)
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					// ...
				})
				.then(() => {
					var user = firebase.auth().currentUser;
					console.log(user);
					user
						.sendEmailVerification()
						.then(function() {
							alert("Check your email to verify your account");
							// Email sent.
						})
						.catch(function(error) {
							console.log(error);
							// An error happened.
						});
					firebase
						.auth()
						.signInAndRetrieveDataWithEmailAndPassword(
							this.state.emailAddress,
							this.state.pwd
						)
						.then(data => {
							this.setState(
								{
									auth: true,
									user: data.user
								},
								() => {
									console.log(this.state);
									console.log(user);
								}
							);
						})
						.catch(function(error) {
							// Handle Errors here.
							var errorCode = error.code;
							var errorMessage = error.message;
							console.log(errorMessage);
						});
					var model = {
						dateCreated:
							Date().toLocaleString() + " " + new Date().getMilliseconds(),
						userType: this.state.userType,
						profilePhoto: this.state.profilePhoto,
						universityID: this.state.universityID,
						phoneN: this.state.phoneN,
						emailAddress: this.state.emailAddress,
						major: this.state.major,
						birthDate: this.state.birthDate,
						gender: this.state.gender,
						fullName: this.state.fullName
					};

					firebase
						.database()
						.ref("users/" + user.uid)
						.set(model);

					console.log(model);
					alert("Sign up is complete");
					this.props.navigation.navigate("Events");
				});
		} else {
			alert("email not recognized");
		}
	}

	getImageURI = imageURI => {
		this.setState({
			profilePhoto: imageURI
		});
	};

	render() {
		return (
			<ScrollView>
				<Content padder>
					<Form>
						<Picker
							mode="dropdown"
							style={{}}
							selectedValue={this.state.userType}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({ userType: itemValue })
							}
						>
							<Picker.Item label="Student" value="student" />
							<Picker.Item label="Master Mind" value="mastermind" />
						</Picker>
						<Gallery returnImageURI={this.getImageURI} />
						{/* <Button style={{ margin: 10 }} onPress={() => this.props.navigation.navigate("Gallery")}>
							<Text>Upload Image</Text>
						</Button> */}
						<Item floatingLabel>
							<Label> Full Name </Label>
							<Input
								underlineColorAndroid={"transparent"}
								onChangeText={fullname => {
									this.setState({ fullName: fullname });
								}}
							/>
						</Item>
						<Item floatingLabel>
							<Label>University ID:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								keyboardType="numeric"
								onChangeText={universityID => {
									this.setState({ universityID: universityID });
								}}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Phone #:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								keyboardType="numeric"
								onChangeText={phoneN => {
									this.setState({ phoneN: phoneN });
								}}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Email Address:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								keyboardType="email-address"
								onChangeText={emailAddress => {
									this.setState({ emailAddress: emailAddress });
								}}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Password:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								secureTextEntry
								onChangeText={pwd => {
									this.setState({ pwd: pwd });
								}}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Confirm:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								secureTextEntry
								onChangeText={retypepwd => {
									this.setState({ retypepwd: retypepwd });
								}}
							/>
						</Item>
						<Label>Gender: </Label>
						<Picker
							selectedValue={this.state.gender}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({ gender: itemValue })
							}
						>
							<Picker.Item label="Select" />
							<Picker.Item label="Male" value="Male" />
							<Picker.Item label="Female" value="Female" />
							<Picker.Item label="Other" value="Other" />
						</Picker>
						<Item floatingLabel>
							<Label>Major:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								onChangeText={major => {
									this.setState({ major: major });
								}}
							/>
						</Item>
						<Text>Birth Date:</Text>
						<DatePicker
							style={{
								width: 200
							}}
							date={this.state.date}
							mode="date"
							placeholder="select date"
							format="YYYY-MM-DD"
							minDate="1950-01-01"
							maxDate={this.state.date}
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									position: "absolute",
									left: 0,
									top: 4,
									marginLeft: 0
								},
								dateInput: {
									marginLeft: 36
								}
								// ... You can check the source to find the other keys.
							}}
							onDateChange={birthDate => {
								this.setState({
									birthDate: birthDate,
									date: birthDate
								});
							}}
						/>
						<Button style={{ margin: 10 }} block onPress={signUp}>
							<Text>Sign Up</Text>
						</Button>
					</Form>
				</Content>
			</ScrollView>
		);
	}
}

export default SignUpForm;
