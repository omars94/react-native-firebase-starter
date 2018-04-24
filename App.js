// import Login from "./src/components/login/login";
import SideMenuSignedIn from "./src/components/drawer/starterDrawer";
import SideMenuNotSignedIn from "./src/components/drawer/notSignedIn";
import React, { Component } from "react";
import {
	AppRegistry,
	AsyncStorage,
	Image,
	Platform,
	StyleSheet,
	Text,
	View,
	ActivityIndicator
} from "react-native";
import Login from "./src/components/login/login";
import firebase from "react-native-firebase";

// import DrawerExample from './Drawer';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			user: null
		};
	}

	componentWillMount() {
		firebase.auth().onAuthStateChanged(user => {
			console.log(user);
			this.setState({
				loading: false,
				user: user
			});
			// AsyncStorage.setItem('_userData', JSON.stringify(user))
		});
	}

	getDrawer() {
		if (this.state.user) {
			return <SideMenuSignedIn />;
		}
		return <SideMenuNotSignedIn />;
	}

	render() {
		if (this.state.loading) {
			return <ActivityIndicator size="large" />;
		}
		return this.getDrawer();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	logo: {
		height: 80,
		marginBottom: 16,
		width: 80
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	},
	modules: {
		margin: 20
	},
	modulesHeader: {
		fontSize: 16,
		marginBottom: 8
	},
	module: {
		fontSize: 14,
		marginTop: 4,
		textAlign: "center"
	}
});

//componentDidMount() {
// firebase things?
// GET USER
//   firebase.database().ref('users/201601234')
//     .once()
//       .then(function(snapshot){
//           console.log(snapshot.val()[0])
//           }
//         ).catch((error)=>{
//    console.log("Api call error");
//    alert(error.message);
// });
// id = 201601438
// name='abed'
// age = '18'
// UPDATE USER DATA OR ADD USER WITH DATA
// firebase.database().ref('users/' + (id ) ).set({
//   name: name,
//   age: age,
// profile_picture : './helloworld/j.png'
// });
// REMOVE USER
// firebase.database().ref('users/' +id).remove()
//}
