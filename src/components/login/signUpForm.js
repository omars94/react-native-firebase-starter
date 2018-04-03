import React, { Component } from "react";
import {
	Picker,
	ScrollView,
	StyleSheet,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
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

		if (this.state.emailAddress.match(reg1) || this.state.emailAddress == reg2){

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
			}else{
				alert('email not recognized');
			}
	}
	render() {
		return (
			<ScrollView style={styles.container}>
				<Picker
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
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Full Name:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="Omar Samman"
							onChangeText={fullname => {
								this.setState({ fullName: fullname });
							}}
						/>
					</View>
				</View>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Univerity ID:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="201801234"
							keyboardType="numeric"
							onChangeText={universityID => {
								this.setState({ universityID: universityID });
							}}
						/>
					</View>
				</View>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Phone #:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="70123456"
							keyboardType="numeric"
							onChangeText={phoneN => {
								this.setState({ phoneN: phoneN });
							}}
						/>
					</View>
				</View>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Email Address:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="john@smith.com"
							keyboardType="email-address"
							onChangeText={emailAddress => {
								this.setState({ emailAddress: emailAddress });
							}}
						/>
					</View>
				</View>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Password:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="********"
							secureTextEntry
							onChangeText={pwd => {
								this.setState({ pwd: pwd });
							}}
						/>
					</View>
				</View>
				<View
					style={{
						width: "70%",
						borderColor: "#48BBEC",
						backgroundColor: "rgba(0,0,0,0.1)",
						borderWidth: 1,
						borderRadius: 10,
						marginLeft: 90
					}}
				>
					<TextInput
						underlineColorAndroid={"transparent"}
						placeholder="Confirm Password"
						secureTextEntry
						onChangeText={retypepwd => {
							this.setState({ retypepwd: retypepwd });
						}}
					/>
				</View>
				<Picker
					selectedValue={this.state.gender}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ gender: itemValue })
					}
				>
					<Picker.Item label="Male" value="m" />
					<Picker.Item label="Female" value="f" />
					<Picker.Item label="Others" value="o" />
				</Picker>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Major:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="Computer Science"
							onChangeText={major => {
								this.setState({ major: major });
							}}
						/>
					</View>
				</View>

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
						this.setState({ birthDate: birthDate });
					}}
				/>

				<TouchableOpacity style={styles.buttonContainer} onPress={signUp}>
					<Text
						style={{
							color: "#f0932b",
							textAlign: "center"
						}}
					>
						Sign Up
					</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	},
	buttonContainer: {
		backgroundColor: "#CF000F",
		width: "50%",
		alignItems: "center"
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
