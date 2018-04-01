import React from "react";
import {
	Button,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import firebase from "react-native-firebase";
import PhotoUpload from "react-native-photo-upload";

export default class createEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			date: "",
			description: "",
			image: "",
			location: "",
		};
		doCreateEvent = this.doCreateEvent.bind(this);
	}

	doCreateEvent() {
		if (
			this.state.title != "" &&
			this.state.date != "" &&
			this.state.description != "" &&
			this.state.location != ""
		) {
			var model = {
				dateCreated: Date.now(),
				title: this.state.title,
				eventDate: this.state.date,
				image: this.state.photo,
				description: this.state.description,
				location: this.state.location,
				eventType: "event",
				mastermind: "not available yet"
			};

			// firebase
			// 	.database()
			// 	.ref("events/" + "event99")
			// 	.set(model)
			// 	.then(() => {
			// 		console.log("done");
			// 	});

			// console.log(model);
		} else alert("you must fill all the boxes");
	}
	// componentDidUpdate() {}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Event title</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="event name"
							onChangeText={title => this.setState({ title: title })}
						/>
					</View>
				</View>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Event Date:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="07-01-2018"
							onChangeText={date => this.setState({ date: date })}
							keyboardType="numeric"
						/>
					</View>
				</View>
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Event Description:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="enter description here"
							multiline={true}
							numberOfLines={4}
							onChangeText={text => this.setState({ description: text })}
							value={this.state.text}
						/>
					</View>
				</View>
				{/* <Image
					style={{
						width: 100,
						height: 50,
						resizeMode: Image.resizeMode.contain,
						borderWidth: 1,
						borderColor: "red"
					}}
					source={{ uri: this.state.image }}
				/> */}
				<View style={styles.textAndTextInputContainer}>
					<View style={styles.textContainer}>
						<Text>Event Location:</Text>
					</View>
					<View style={styles.textInputContainer}>
						<TextInput
							underlineColorAndroid={"transparent"}
							placeholder="event location"
							onChangeText={location => this.setState({ location: location })}
						/>
					</View>
				</View>
				<PhotoUpload
					onPhotoSelect={avatar => {
						if (avatar) {
							console.log(avatar);
							var reader = new FileReader();
							reader.readAsDataURL(avatar);
							reader.onloadend = function() {
								base64data = reader.result;
								// console.log(base64data);
							};
							this.setState({
								photo: avatar
							});
							// console.log("Image base64 string: ", avatar);
						}
					}}
				>
					<Image
						style={{
							paddingVertical: 30,
							marginVertical: 10,
							width: 150,
							height: 15
						}}
						source={{
							uri: "http://via.placeholder.com/750x300?text=Upload+Image"
						}}
					/>
				</PhotoUpload>
				<View
					style={{
						width: "50%",
						alignItems: "stretch",
						paddingBottom: 10
					}}
				>
					<Button color="#f0932b" title="Create Now" onPress={doCreateEvent} />
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	textAndTextInputContainer: {
		flex: 1,
		flexDirection: "row",
		paddingHorizontal: 10,
		paddingVertical: 2.5,
		alignItems: "center"
	},
	container: {
		flex: 1,
		paddingHorizontal: 20
	},
	textContainer: {
		width: "25%"
	},
	textInputContainer: {
		width: "75%",
		borderColor: "#48BBEC",
		backgroundColor: "rgba(0,0,0,0.1)",
		borderWidth: 1,
		borderRadius: 10,
		paddingBottom: 5
	}
});
