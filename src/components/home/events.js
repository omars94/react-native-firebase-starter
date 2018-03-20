"use strict";

import React, { Component } from "react";
import firebase from "react-native-firebase";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import EventView from './layout/event';
import ListingLayout from './ListingLayout';


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
			switch (events[item].eventType) {
				case 'event':
				return <EventView key={item} event={events[item]} />

				default:
				return <Text key={item}>Not Event</Text>
			}
		});
	}
}

const styles = StyleSheet.create({});

export default events;
