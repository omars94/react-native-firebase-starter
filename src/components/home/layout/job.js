"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

class job extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateCreated: "",
			title: "",
			eventType: "",
			description: "",
			mastermind: "",
			company: "",
			jobTitle: "",
			jobWorkType: "",
			jobReqs: "",
			email: "",
			deadline: "",
			location: "",
			salary: "",
			image: ""
		};
	}
	render() {
		return (
			<View //style={styles.mainContainer}
			>
				<ImageBackground
					style={{ width: "100%", height: "70%", opacity: 0.7 }}
					source={{ uri: this.props.event.image }}
				>
					<Text>Title: {this.props.event.title}</Text>
					<Text>Job Title: {this.props.event.jobTitle}</Text>
					<Text>
						Deadline for Application:{this.props.event.deadline}
					</Text>
					<Text>Work Location:{this.props.event.location}</Text>
					<Text>Company: {this.props.event.company}</Text>
					<Text>Email: {this.props.event.email}</Text>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

export default job;
