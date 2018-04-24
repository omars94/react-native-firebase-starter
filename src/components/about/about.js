import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

class about extends Component {
	render() {
		return (
			<View>
				<Text
					style={{ fontSize: 50, color: "red", textAlign: "center" }}
				>
					This is the about page
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default about;
