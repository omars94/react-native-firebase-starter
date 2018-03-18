"use strict";

import React, { Component } from "react";
import firebase from "react-native-firebase";
import { StyleSheet, View, Text } from "react-native";

class events extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: null
		};
	}

	componentWillMount() {
		firebase
			.database()
			.ref("events/")
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
				alert(error.message);
			});
	}

	render() {
		return (
			<View>
				{this.state.events ? (
					this.renderEvents()
				) : (
					<Text>Please Wait</Text>
				)}
			</View>
		);
	}

	renderEvents() {
		var eventsArray = Object.keys(this.state.events)
		var events = this.state.events
		return eventsArray.map(item => {
			return (
				<View>
					<Text>{events[item].title}</Text>
				</View>
			);
		});
	}
}

const styles = StyleSheet.create({});

export default events;
