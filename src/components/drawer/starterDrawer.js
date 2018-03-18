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
import Settings from "../settings/settings";
import About from "../about/about";

// const LoginSignUpStack = StackNavigator({
// 	Login: {
// 		screen: Login
// 	},
// 	SignUp: {
// 		screen: SignUpForm
// 	}
// });

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
		},
		Settings: {
			screen: Settings
		},
		About: {
			screen: About
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
