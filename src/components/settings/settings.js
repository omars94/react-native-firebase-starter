import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import firebase from "react-native-firebase";
import { Container, Button, Content, Header, Text } from "native-base";
class settings extends Component {
	render() {
		return (
			<Container>
				<Content>
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

const styles = StyleSheet.create({});

export default settings;
