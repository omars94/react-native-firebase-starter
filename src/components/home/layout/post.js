"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

class post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateCreated: "",
			title: "",
			eventType: "",
			description: "",
			mastermind: "",
			image: ""
		};
	}
	render() {
		return <View />;
	}
}

const styles = StyleSheet.create({});

export default post;
