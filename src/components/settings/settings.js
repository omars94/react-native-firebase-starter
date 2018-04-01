import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";


class settings extends Component {
	render() {
		return (
			<View style={{flex:1}}>
				<Text
					style={{ fontSize: 50, color: "red", textAlign: "center" }}
				>
					This is the settings page
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default settings;
