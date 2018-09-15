import ListingLayout from "./ListingLayout";
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import firebase from "react-native-firebase";
import { FloatingAction } from "react-native-floating-action";

class events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: null,
			// should not have auth and userType here
			auth: true,
			userType: "",
			users: null
		};
	}
	componentWillMount() {
		let currentUser = firebase.auth().currentUser;
		if (currentUser != null) {
			firebase
				.database()
				.ref("users/" + currentUser.uid)
				.orderByChild("dateCreated")
				.once()
				.then(
					function(snapshot) {
						this.setState({
							userType: snapshot.val().userType
						});
					}.bind(this)
				);
		}

		firebase
			.database()
			.ref("events/")
			.orderByChild("dateCreated")
			.once()
			.then(
				function(snapshot) {
					this.setState(
						{
							events: snapshot.val()
						},
						() => {
							// console.log(this.state.events)
						}
					);
				}.bind(this)
			)
			.catch(error => {
				console.log("Api call error", error.message);
				// alert(error.message);
			});
	}
	render() {
		return (
			<View>
				<ScrollView>
					{this.state.events ? this.renderEvents() : <Text>Please Wait</Text>}
				</ScrollView>
				{this.state.auth &&
					this.state.userType == "mastermind" && (
						<FloatingAction
							ref={ref => {
								this.floatingAction = ref;
							}}
							actions={actions}
							style={{}}
							onPressItem={name => {
								this.floatingAction.animateButton();
								if (name == "event") {
									this.props.navigation.navigate("createEvent");
								} else if (name == "announcement") {
									this.props.navigation.navigate("createAnnouncement");
								} else if (name == "job") {
									this.props.navigation.navigate("createJob");
								} else if (name == "alumni") {
									this.props.navigation.navigate("createAlumni");
								} else if (name == "post") {
									this.props.navigation.navigate("createPost");
								}
							}}
						/>
					)}
			</View>
		);
	}
	renderEvents() {
		var eventsArray = Object.keys(this.state.events);
		var events = this.state.events;

		return eventsArray.map(item => {
			let ev = events[item];
			ev.id = item;
			return (
				<ListingLayout
					key={item}
					event={ev}
					navigation={this.props.navigation}
				/>
			);
		});
	}
}

const actions = [
	{
		text: "Event",
		icon: (
			<Image
				source={require("../../images/icons/event.png")}
				style={{
					width: 35,
					height: 35
				}}
			/>
		),
		name: "event",
		position: 1
	},
	{
		text: "Job",
		icon: (
			<Image
				source={require("../../images/icons/job.png")}
				style={{
					width: 35,
					height: 35
				}}
			/>
		),
		name: "job",
		position: 2
	},
	{
		text: "Post",
		icon: (
			<Image
				source={require("../../images/icons/post.png")}
				style={{
					width: 35,
					height: 35
				}}
			/>
		),
		name: "post",
		position: 3
	},
	{
		text: "Alumni",
		icon: (
			<Image
				source={require("../../images/icons/alumni.png")}
				style={{
					width: 35,
					height: 35
				}}
			/>
		),
		name: "alumni",
		position: 4
	},
	{
		text: "Announcement",
		icon: (
			<Image
				source={require("../../images/icons/announcement.png")}
				style={{
					width: 35,
					height: 35
				}}
			/>
		),
		name: "announcement",
		position: 5
	}
];

const styles = StyleSheet.create({});

export default events;
