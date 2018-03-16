import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Platform, Button, Text, ScrollView, StatusBar } from "react-native";
import { TabNavigator, SafeAreaView } from "react-navigation";

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
}

const Events = ({ navigation }) => (
	<View>
		<Text style={{ fontSize: 50 }}>Events</Text>
	</View>
);
const Profile = ({ navigation }) => (
	<View>
		<Text style={{ fontSize: 50 }}>Profile</Text>
	</View>
);

const homepageTabNav = TabNavigator({
	Events: { screen: Events },
	Profile: { screen: Profile },
	headerMode: "float",
	navigationOptions: ({ navigation }) => ({
		headerStyle: { backgroundColor: "green" },
		title: "Logged In to your app!",
		headerLeft: (
			<Text onPress={() => navigation.navigate("DrawerOpen")}>Menu</Text>
		)
	})
});

const styles = StyleSheet.create({});

export default homepageTabNav;
