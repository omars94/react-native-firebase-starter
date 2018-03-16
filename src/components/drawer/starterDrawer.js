import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

import {
	StackNavigator,
	DrawerNavigator,
	SafeAreaView
} from "react-navigation";

import Login from "../login/login";
import SignUpForm from "../login/signUpForm";
import Homepage from "../home/homepage";

const LoginSignUpStack = StackNavigator({
	Login: {
		screen: Login
	},
	SignUp: {
		screen: SignUpForm
	},
	navigationOptions: ({ navigation }) => ({
		headerStyle: { backgroundColor: "green" },
		title: "Logged In to your app!",
		headerLeft: (
			<Text onPress={() => navigation.navigate("DrawerOpen")}>Menu</Text>
		)
	})
});

const sideMenu = DrawerNavigator(
	{
		Login: {
			screen: Login
		},
		SignUp: {
			screen: SignUpForm
		},
		Homepage: {
			screen: Homepage
		}
	},
	{
		initialRouteName: "Login",
		contentOptions: {
			activeTintColor: "#e91e63"
		}
	}
);
const styles = StyleSheet.create({});

export default sideMenu;
