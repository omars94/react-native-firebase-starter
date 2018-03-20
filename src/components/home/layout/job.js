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
		return <View />;
	}
}

const styles = StyleSheet.create({});

export default job;
