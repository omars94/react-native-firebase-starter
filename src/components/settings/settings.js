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
					<Text
						style={{
							fontSize: 50,
							color: "red",
							textAlign: "center"
						}}
					>
						This is the settings page
					</Text>
				</Content>
			</Container>
		);
	}
}

export default settings;
