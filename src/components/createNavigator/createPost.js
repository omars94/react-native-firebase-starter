/* @flow */

import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
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
import PhotoUpload from "react-native-photo-upload";

export default class createAnnouncement extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			photo: ""
		};
	}
	render() {
		return (
			<Container>
				<Content>
					<Item floatingLabel>
						<Label>Post title:</Label>
						<Input
							onChangeText={title => this.setState({ title: title })}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Post Description:</Label>
						<Input
							multiline={true}
							numberOfLines={4}
							onChangeText={text => this.setState({ description: text })}
							value={this.state.text}
						/>
					</Item>
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
								height: 15
							}}
							resizeMode="cover"
							source={{
								uri: "http://via.placeholder.com/750x300?text=Upload+Image"
							}}
						/>
					</PhotoUpload>
					<Button color="#f0932b" title="Create Now" />
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20
	},
	textAndTextInputContainer: {
		paddingHorizontal: 5,
		paddingVertical: 2.5
	},
	textContainer: {
		width: "100%",
		marginBottom: 5
	},
	textInputContainer: {
		width: "100%",
		borderColor: "#48BBEC",
		backgroundColor: "rgba(0,0,0,0.1)",
		borderWidth: 1,
		borderRadius: 10,
		paddingBottom: 5
	}
});
