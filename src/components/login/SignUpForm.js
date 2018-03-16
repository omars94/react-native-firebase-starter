import React, { Component } from "react";

import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	TextInput,
	Picker,
	TouchableOpacity
} from "react-native";

import DatePicker from "react-native-datepicker";

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
			fullName: ""
		};
	}
	render() {
		return (
			<ScrollView>
				<Picker
					selectedValue={this.state.userType}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ userType: itemValue })
					}
				>
					<Picker.Item label="Student" value="student" />
					<Picker.Item label="Master Mind" value="mastermind" />
				</Picker>
				<Text>Full Name: </Text>
				<TextInput
					placeholder="Omar Samman"
					onChangeText={fullname => {
						this.setState({
							fullName: fullname
						});
					}}
				/>
				<Text> Univerity ID: </Text>
				<TextInput
					placeholder="201801234"
					keyboardType="numeric"
					onChangeText={universityID => {
						this.setState({ universityID: universityID });
					}}
				/>
				<Text>Phone #: </Text>
				<TextInput
					placeholder="70123456"
					keyboardType="numeric"
					onChangeText={phoneN => {
						this.setState({ phoneN: phoneN });
					}}
				/>
				<Text>Email Address:</Text>
				<TextInput
					placeholder="john@smith.com"
					keyboardType="email-address"
					onChangeText={emailAddress => {
						this.setState({ emailAddress: emailAddress });
					}}
				/>
				<Text>Password:</Text>
				<TextInput
					placeholder="********"
					onChangeText={pwd => {
						this.setState({ pwd: pwd });
					}}
				/>
				<TextInput
					placeholder="Confirm Password"
					onChangeText={retypepwd => {
						this.setState({ retypepwd: retypepwd });
					}}
				/>
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
				<Text> Major: </Text>
				<TextInput
					placeholder="Computer Science"
					onChangeText={major => {
						this.setState({ major: major });
					}}
				/>

				<DatePicker
					style={{ width: 200 }}
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
				<TouchableOpacity 
					style={styles.buttonContainer}
					onPress={() => {
						// this.trySignUp();
					}}
				>
					<Text style={{color:'white', textAlign:'center'}}>Sign Up</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer:{
		backgroundColor:'#CF000F',
		width:'50%'
	}
});

export default SignUpForm;
