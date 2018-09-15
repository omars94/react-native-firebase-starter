/* @flow */

import React, { Component } from "react";
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
import {StyleSheet} from 'react-native';

export default class createAnnouncement extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: ""
		};
	}
	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Announcement title:</Label>
							<Input
								onChangeText={title => this.setState({ title: title })}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Announcement Description:</Label>
							<Input
								multiline={true}
								numberOfLines={4}
								onChangeText={text => this.setState({ description: text })}
								value={this.state.text}
							/>
						</Item>
						<Button color="#f0932b" title="Create Now" />
					</Form>
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
