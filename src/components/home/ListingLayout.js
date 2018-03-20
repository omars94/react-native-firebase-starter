"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Text, ImageBackground } from "react-native";

class Event extends Component {
	event = this.state.events;
	render() {
		<View>
			<ImageBackground
				style={{ width: "100%", height: 200, opacity: 0.5 }}
				source={{ uri: this.props.events.image }}
			>
				<Text>Event Title: {this.props.events.title}</Text>
				<Text>Event Date:{this.props.events.date}</Text>
				<Text>Event Location:{this.props.events.location}</Text>
				<Text>Interested? </Text>
			</ImageBackground>
		</View>
	}
}
class Job extends Component {
	render() {
		<Text>not Event</Text>;
	}
}
class Post extends Component {
	render() {
		<Text>not Event</Text>;
	}
}
class Announcement extends Component {
	render() {
		<Text>not Event</Text>;
	}
}
class Alumni extends Component {
	render() {
		<Text>not Event</Text>;
	}
}

class ListingLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			events: this.props.event
		};
	}
	render() {
		return () => {
			switch (this.props.event.eventType) {
				case "event":
					return <Event />;
				case "announcement":
					return <Announcement />;
				case "jobVacancy":
					return <Job />;
				case "post":
					return <Post />;
				case "alumni":
					return <Alumni />;
				default:
					return <Text key={item}>Not Event</Text>;
			}
		};
	}
}


const styles = StyleSheet.create({});

export default ListingLayout;
