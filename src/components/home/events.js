"use strict";;

import ListingLayout from './ListingLayout';
import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import firebase from "react-native-firebase";

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
				alert(error.message);
			});
	}

	render() {
		return (
			<ScrollView>
				{this.state.events ? (
					this.renderEvents()
				) : (
					<Text>Please Wait</Text>
				)}
			</ScrollView>
		);
	}

	renderEvents() {
		var eventsArray = Object.keys(this.state.events)
		var events = this.state.events
		return eventsArray.map(item => {
			// switch (events[item].eventType) {
			// 	case 'event':
				return <ListingLayout key={item} event={events[item]} />
                //
                // default:
                // return <Text key={item}>Not Event</Text>
			// }
		});
	}
}

const styles = StyleSheet.create({});

export default events;
