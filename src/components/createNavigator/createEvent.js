import {
	Container,
	Content,
	Input,
	Form,
	Item,
	Label,
	Button,
	Text
} from "native-base";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "react-native-firebase";
import PhotoUpload from "react-native-photo-upload";

export default class createEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "", date: "", description: "", image: "", location: "", mastermind: ""
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
				mastermind: this.state.mastermind
			};

			firebase
				.database()
				.ref("events/" + model.title)
				.set(model)
				.then(() => {
					console.log("done");
				});

		} else alert("you must fill all the boxes");
	}

	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Event title</Label>
							<Input
								underlineColorAndroid={"transparent"}
								onChangeText={title => this.setState({ title: title })}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Event Date:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								onChangeText={date => this.setState({ date: date })}
								keyboardType="numeric"
							/>
						</Item>
						<Item>
							<Label> Event Description:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								multiline={true}
								numberOfLines={4}
								onChangeText={text => this.setState({ description: text })}
								value={this.state.text}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Event Location:</Label>
							<Input
								underlineColorAndroid={"transparent"}
								onChangeText={location => this.setState({ location: location })}
							/>
						</Item>
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
						<Button block onPress={doCreateEvent}>
							<Text>Create Now</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
