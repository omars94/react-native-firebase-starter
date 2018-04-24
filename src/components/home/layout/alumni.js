"use strict";

import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

class alumni extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateCreated: "",
			title: "",
			eventType: "",
			description: "",
			mastermind: "",
			alumni: "",
			image: ""
		};
	}
	render() {
		return <View />;
	}
}

const styles = StyleSheet.create({});

export default alumni;
