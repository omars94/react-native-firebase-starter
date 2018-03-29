import React, { Component } from "react";
import {
	Picker,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
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
				<View style={styles.textAndTextInputContainer}>
				<Text>Full Name: </Text>
				<TextInput
					placeholder="Omar Samman"
					onChangeText={fullname => {
						this.setState({
							fullName: fullname
						});
					}}
				/>
			</View>
			<View style={styles.textAndTextInputContainer}>
				<Text> Univerity ID: </Text>
				<TextInput
					placeholder="201801234"
					keyboardType="numeric"
					onChangeText={universityID => {
						this.setState({ universityID: universityID });
					}}
				/>
			</View>
			<View style={styles.textAndTextInputContainer}>
				<Text>Phone #: </Text>
				<TextInput
					placeholder="70123456"
					keyboardType="numeric"
					onChangeText={phoneN => {
						this.setState({ phoneN: phoneN });
					}}
				/>
			</View>
			<View style={styles.textAndTextInputContainer}>
				<Text>Email Address:</Text>
				<TextInput
					placeholder="john@smith.com"
					keyboardType="email-address"
					onChangeText={emailAddress => {
						this.setState({ emailAddress: emailAddress });
					}}
				/>
			</View>
			<View style={styles.textAndTextInputContainer}>
				<View style={styles.textContainer} >
				<Text>Password:</Text>
			</View>
			<View style = {styles.textInputContainer}>
				<TextInput
					placeholder="********"
					secureTextEntry
					onChangeText={pwd => {
						this.setState({ pwd: pwd });
					}}
				/>
			</View>
			</View>
				<TextInput
					placeholder="Confirm Password"
					secureTextEntry
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
				<View style={styles.textAndTextInputContainer}>

				<Text> Major: </Text>
				<TextInput
					placeholder="Computer Science"
					onChangeText={major => {
						this.setState({ major: major });
					}}
				/>
</View>

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
	buttonContainer: {
		backgroundColor:'#CF000F',
		width:'50%'
	},
	textAndTextInputContainer: {
		flex:1,
		alignItems:'center',
		flexDirection:'row',
		paddingHorizontal: 10,
		paddingVertical: 2.5
	},
	textContainer: {
		width:'25%'
	},
	textInputContainer: {
		width: '75%'
	}
});

export default SignUpForm;
