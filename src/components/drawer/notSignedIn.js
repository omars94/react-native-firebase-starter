import About from "../about/about";
import Homepage from "../home/homepage";
import Login from "../login/login";
import SignUpForm from "../login/signUpForm";
import Gallery from "../login/Gallery";
import Settings from "../settings/settings";
import ChatUI from "../chat/chatUI";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from 'react-native-firebase';
import Icon from "react-native-vector-icons/FontAwesome";
import {
	DrawerNavigator,
	SafeAreaView,
	StackNavigator
} from "react-navigation";
const sideMenuNotSignedIn = DrawerNavigator(
	{
		Homepage: {
			screen: Homepage,
			navigationOptions: {
				drawerLabel: "Homepage",
				drawerIcon: ({tintColor}) => <Icon name="home" size={24} />
			},
		},
		Login: {
			screen: Login,
			navigationOptions: {
				drawerLabel: "Login",
				drawerIcon: ({tintColor}) => <Icon name="sign-in" size={24} />
			},
		},
		SignUp: {
			screen: SignUpForm,
			navigationOptions: {
				drawerLabel: "SignUp",
				drawerIcon: ({tintColor}) => <Icon name="user-plus" size={22} />
			},
		},
		Settings: {
			screen: Settings,
			navigationOptions: {
				drawerLabel: "Settings",
				drawerIcon: ({tintColor}) => <Icon name="wrench" size={24} />
			},
		},
		About: {
			screen: About,
			navigationOptions: {
				drawerLabel: "About",
				drawerIcon: ({tintColor}) => <Icon name="question" size={24} />
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
);
export default sideMenuNotSignedIn;
