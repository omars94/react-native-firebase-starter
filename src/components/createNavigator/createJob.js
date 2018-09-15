import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
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

export default class createJob extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			jobTitle: "",
			location: "",
			date: "",
			description: "",
			photo: ""
		};
	}

	componentDidUpdate() {
		console.log(
			"details: ",
			this.state.title + " " + this.state.date + " " + this.state.description
		);
	}

	render() {
		return (
			<Container>
				<Content>
					<Item floatingLabel>
						<Label>Title</Label>
						<Input
							onChangeText={title => this.setState({ title: title })}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Job Title</Label>
						<Input
							onChangeText={jobTitle => this.setState({ jobTitle: jobTitle })}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Work Location:</Label>
						<Input
							onChangeText={location => this.setState({ location: location })}
							keyboardType="numeric"
						/>
					</Item>
					<Item floatingLabel>
						<Label>Job Description:</Label>
						<Input
							multiline={true}
							numberOfLines={4}
							onChangeText={text => this.setState({ description: text })}
							value={this.state.text}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Deadline</Label>
						<Input
							onChangeText={deadline => this.setState({ deadline: deadline })}
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
