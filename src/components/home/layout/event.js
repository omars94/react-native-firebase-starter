"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text, ImageBackground } from "react-native";

class event extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateCreated: this.props.event.dateCreated,
			title: this.props.event.title,
			eventType: this.props.event.eventType,
			description: this.props.event.description,
			mastermind: this.props.event.mastermind,
			eventDate: this.props.event.eventDate,
			targetAudience: this.props.event.targetAudience,
			eventLocation: this.props.event.eventLocation,
			image: this.props.event.image
		};
	}

	render() {
		return (
			<View //style={styles.mainContainer}
			>
				<ImageBackground
					style={{ width: "100%", height: "70%", opacity: 1 }}
					source={{ uri: props.event.image }}
				>
					<Text>Event Title: {props.event.title}</Text>
					<Text>Event Date: {props.event.date}</Text>
					<Text>Event Location: {props.event.location}</Text>
					<Text>Interested? </Text>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default event;
