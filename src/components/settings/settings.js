import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import firebase from "react-native-firebase";
class settings extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Button
					title="Logout"
					onPress={() => {
						firebase.auth().signOut();
					}}
				/>
				<Text style={{ fontSize: 50, color: "red", textAlign: "center" }}>
					This is the settings page
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default settings;
