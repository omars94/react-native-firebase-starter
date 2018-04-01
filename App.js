// import Login from "./src/components/login/login";
import Homepage from "./src/components/drawer/starterDrawer";
import React, { Component } from "react";
import {
	AppRegistry,
	Image,
	Platform,
	StyleSheet,
	Text,
	View
} from "react-native";

// import DrawerExample from './Drawer';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			// firebase things?
		};
	}

	componentDidMount() {
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
	}

	render() {
		return <Homepage />;
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
