import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import firebase from "react-native-firebase";
import {
	Container,
	Left,
	Right,
	Icon,
	Button,
	Content,
	Header,
	Text,
	Body
} from "native-base";
class settings extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Text>Press me</Text>
					</Body>
					<Right />
				</Header>

				<Content style={{ padding: 20 }}>
					<Button
						onPress={() => {
							firebase.auth().signOut();
						}}
					>
						<Text>Logout</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default settings;
