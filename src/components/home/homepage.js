import createEvent from "../createNavigator/createEvent";
import createPost from "../createNavigator/createPost";
import createAlumni from "../createNavigator/createAlumni";
import createAnnouncement from "../createNavigator/createAnnouncement";
import createJob from "../createNavigator/createJob";
import SignUp from "../login/signUpForm";
import Events from "./events";
import Chat from "../chat/chatUI";

import React, { Component } from "react";
import {
	Button,
	Platform,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import firebase from "react-native-firebase";
import IOSIcon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";

class Homepage extends Component {
	render() {
		return <View />;
	}

	constructor(props) {
		super(props);
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				// User is signed in.
				console.log(user);
			} else {
				// No user is signed in.
				console.log("not sign in yet");
			}
		});
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

const EventStackNav = StackNavigator(
	{
		Events: {
			screen: Events,
			navigationOptions: ({ navigation }) => ({
				title: "BAU Events",
				headerLeft: (
					<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
						<IOSIcon name="ios-menu" size={30} />
					</TouchableOpacity>
				),
				headerStyle: { paddingRight: 10, paddingLeft: 10 }
			})
		},
		SignUp: {
			screen: SignUp,
			navigationOptions: props => ({
				title: "Sign Up"
			})
		},
		createEvent: {
			screen: createEvent,
			navigationOptions: props => ({
				title: "Create Event"
			})
		},
		createAnnouncement: {
			screen: createAnnouncement,
			navigationOptions: props => ({
				title: "Create Announcement"
			})
		},
		createJob: {
			screen: createJob,
			navigationOptions: props => ({
				title: "Create Job"
			})
		},
		createAlumni: {
			screen: createAlumni,
			navigationOptions: props => ({
				title: "Create Alumni"
			})
		},
		createPost: {
			screen: createPost,
			navigationOptions: props => ({
				title: "Create Post"
			})
		},
		Chat: {
			screen: Chat,
			navigationOptions: props => ({
				title: "Chat"
			})
		}
	},
	{
		initialRouteName: "Events",
		contentOptions: {
			activeTintColor: "#e91e63"
		}
	}
);


export default EventStackNav;
