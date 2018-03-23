import Events from "./events";
import React, { Component } from "react";
import {Button, Platform, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import firebase from "react-native-firebase";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView, TabNavigator } from "react-navigation";

class Homepage extends Component {
	render() {
		return <View />;
	}

	constructor(props) {
		super(props);

		this.state = {
			userType: ""
		};
	}
	componentDidMount() {
		firebase
			.database()
			.ref("events/")
			.once()
			.then(function(snapshot) {
				console.log(snapshot);
			});
	}
}

// const Events = ({ navigation }) => (
// 	<View>
// 		<Text style={{ fontSize: 50 }}>Events</Text>
// 	</View>
// );
const Profile = ({ navigation }) => (
	<View>
		<LinearGradient
			colors={["#000", "#fff"]}
			style={styles.linearGradient}
		>
			<Text style={{ fontSize: 50 }}>Profile</Text>
			<Text>Sign in with Facebook</Text>
		</LinearGradient>
	</View>
);

const homepageTabNav = TabNavigator({
	Events: { screen: Events },
	Profile: { screen: Profile }
});

const styles = StyleSheet.create({
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	}
});

export default homepageTabNav;
