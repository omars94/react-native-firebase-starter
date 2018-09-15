/* @flow */

import React, { Component } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Container, Content, Button, Text, Icon } from "native-base";
import firebase from "react-native-firebase";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Profile extends Component {
	constructor() {
		super();
		this.state = {
			userData: [{}],
			fullName: "",
			birthDate: ""
		};
		this.getUserData = this.getUserData.bind(this);
		var userData = [{}];
	}
	getUserData() {
		// get current user ID
		var currentUserID = firebase.auth().currentUser.uid;
		// query user class to get reference keys to posts
		var user = firebase.database().ref("users/" + currentUserID);
		//create posts array to store posts that are queried
		///// NEW - create promise
		// var userPromise = new Promise(function(resolve, reject) {
		// query the post class
		user
			.once("value")
			.then(function(snapshot) {
				userData = snapshot.val();
			})
			.then(function(error) {
				console.log(error);
			});
		setTimeout(() => {
			this.setState({
				userData: userData
			});
		}, 2);
		// });
		// userPromise.then(function(userData) {
		// console.log("promise", userData);
		// });

		// firebase
		// 	.database()
		// 	.ref("/users/" + userId)
		// 	.once("value")
		// 	.then(
		// 		function(snapshot) {
		// 			var userData = snapshot._value;
		// 			return userData;
		// 		},
		// 		function(error) {
		// 			console.log(error);
		// 		}
		// 	);
	}
	componentWillMount() {
		this.getUserData();
	}

	render() {
		return (
			<Container
				style={{
					flex: 1,
					alignItems: "center",
					width: "100%"
				}}
			>
				<ImageBackground
					style={{
						backgroundColor: "#2196F3",
						width: "100%",
						alignItems: "center"
					}}
				>
					<Image
						center
						source={{
							uri: this.state.userData.profilePhoto
						}}
						style={{
							marginVertical: 50,
							width: 200,
							height: 200,
							borderRadius: 100
						}}
					/>
				</ImageBackground>
				<Container
					style={{
						borderColor: "red",
						borderWidth: 1,
						margin: 10,
						borderRadius: 20,
						width: "80%"
					}}
				>
					<Grid
						style={{
							height: 200,
							alignItems: "center",
							justifyContent:'center'
						}}
					>
						<Row>
							<Col style={{ alignItems: "center" }}>
								<Text>Events</Text>
							</Col>
							<Col style={{ alignItems: "center" }}>
								<Text>Comments</Text>
							</Col>
							<Col style={{ alignItems: "center" }}>
								<Text>Chats</Text>
							</Col>
						</Row>
						<Row>
							<Col size={33.33333} style={styles.iconCol}>
								<Icon name="contact" />
							</Col>
							<Col size={66.66666}>
								<Text>{this.state.userData.fullName}</Text>
							</Col>
						</Row>
						<Row>
							<Col size={33.33333} style={styles.iconCol}>
								<Icon name="card" />
							</Col>
							<Col size={66.66666}>
								<Text>{this.state.userData.universityID}</Text>
							</Col>
						</Row>
						<Row>
							<Col size={33.33333} style={styles.iconCol}>
								<Icon name="mail" />
							</Col>
							<Col size={66.66666}>
								<Text>{this.state.userData.emailAddress}</Text>
							</Col>
						</Row>
						<Row>
							<Col size={33.33333} style={styles.iconCol}>
								<Icon name="call" />
							</Col>
							<Col size={66.66666}>
								<Text>{this.state.userData.phoneN}</Text>
							</Col>
						</Row>
						<Row>
							<Col size={33.33333} style={styles.iconCol}>
								<Icon name="briefcase" />
							</Col>
							<Col size={66.66666}>
								<Text>{this.state.userData.major}</Text>
							</Col>
						</Row>
						<Row>
							<Col center>
								{this.state.userData.gender == "Male" && <Icon name="male" />}
								{this.state.userData.gender == "Female" && (
									<Icon name="female" />
								)}
							</Col>
						</Row>
					</Grid>
				</Container>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	iconCol: {
		alignItems: "flex-end",
		marginRight:30
	}
});
