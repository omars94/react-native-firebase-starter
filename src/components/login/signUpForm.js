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
import PhotoUpload from "react-native-photo-upload";

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
			pwd: "",
			retypepwd: "",
			firstName: "",
			lastName: "",
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
					firstName = this.state.fullName.split(" ")[0];
					lastName = this.state.fullName.split(" ")[1];
					var model = {
						dateCreated:
							Date().toLocaleString() + " " + new Date().getMilliseconds(),
						userType: this.state.userType,
						universityID: this.state.universityID,
						phoneN: this.state.phoneN,
						emailAddress: this.state.emailAddress,
						major: this.state.major,
						birthDate: this.state.birthDate,
						gender: this.state.gender,
						firstName: firstName,
						lastName: lastName
					};

					firebase
						.database()
						.ref("users/" + this.state.universityID)
						.set(model);

					console.log(model);
					alert("Sign up is complete");
					this.props.navigation.navigate("Events");
				});
		} else {
			alert("email not recognized");
		}
	}
	render() {
		return (
			<ScrollView style={styles.container}>
				<Content>
					<Form>
						<Picker
							mode="dropdown"
							selectedValue={this.state.userType}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({ userType: itemValue })
							}
						>
							<Picker.Item label="Student" value="student" />
							<Picker.Item label="Master Mind" value="mastermind" />
						</Picker>
						<PhotoUpload
							onPhotoSelect={avatar => {
								if (avatar) {
									console.log("Image base64 string: ", avatar);
								}
							}}
						>
							<Image
								style={{
									paddingVertical: 30,
									marginVertical: 10,
									width: 150,
									height: 150,
									borderRadius: 75
								}}
								resizeMode="center"
								source={{
									uri:
										"https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg"
								}}
							/>
						</PhotoUpload>
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
						<Text>Gender: </Text>
						<Picker
							selectedValue={this.state.gender}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({ gender: itemValue })
							}
						>
							<Picker.Item label="Select" />
							<Picker.Item label="Male" value="m" />
							<Picker.Item label="Female" value="f" />
							<Picker.Item label="Others" value="o" />
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
						<Button style={{marginVertical:10}} block onPress={signUp}>
							<Text>Sign Up</Text>
						</Button>
					</Form>
				</Content>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	},
	buttonContainer: {
		alignItems: "center",
		backgroundColor: "#abcdef",
		height: 40,
		width: 200,
		margin: 10,
		borderWidth: 1.5,
		borderColor: "black"
	},
	textAndTextInputContainer: {
		flex: 1,
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 10,
		paddingVertical: 2.5
	},
	textContainer: {
		width: "25%"
	},
	textInputContainer: {
		width: "75%",
		borderColor: "#48BBEC",
		backgroundColor: "rgba(0,0,0,0.1)",
		borderWidth: 1,
		paddingBottom: 5,
		borderRadius: 10
	}
});

export default SignUpForm;
