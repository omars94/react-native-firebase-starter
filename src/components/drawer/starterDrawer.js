import About from "../about/about";
import Homepage from "../home/homepage";
import Settings from "../settings/settings";
import Profile from "../profile/Profile"
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatUI from "../chat/chatUI";
import firebase from "react-native-firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import {
	DrawerNavigator,
	SafeAreaView,
	StackNavigator
} from "react-navigation";

export default (sideMenuSignedIn = DrawerNavigator(
	{
		Homepage: {
			screen: Homepage,
			navigationOptions: {
				drawerLabel: "Homepage",
				drawerIcon: ({ tintColor }) => <Icon name="home" size={24} />
			}
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				drawerLabel: "Profile",
				drawerIcon: ({ tintColor }) => <Icon name="user" size={24} />
			}
		},
		Settings: {
			screen: Settings,
			navigationOptions: {
				drawerLabel: "Settings",
				drawerIcon: ({ tintColor }) => <Icon name="wrench" size={24} />
			}
		},
		About: {
			screen: About,
			navigationOptions: {
				drawerLabel: "About",
				drawerIcon: ({ tintColor }) => <Icon name="question" size={24} />
			}
		},
		Chat: {
			screen: ChatUI,
			navigationOptions: {
				title: "Chat",
				drawerLabel: "Chat"
			}
		}
	},
	{
		initialRouteName: "Homepage",
		contentOptions: {
			activeTintColor: "#e91e63"
		}
	}
));
// const styles = StyleSheet.create({});
//export sideMenuSignedIn;
//export sideMenuNotSignedIn;
// var user = firebase.auth().currentUser;
//
// if (user) {
//   // User is signed in
// 	export default sideMenuSignedIn
// } else {
//   // No user is signed in.
// 	export default sideMenuSignedIn
//
// }
