import React, { Component } from "react";

import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Event = props => {
	return (
		<View style={styles.mainContainer}>
			<ImageBackground
				resizeMode="stretch"
				style={{ width: "100%", height: 200, opacity: 1 }}
				source={{ uri: props.event.image }}
			>
				<LinearGradient
					colors={["rgba(41, 128, 185,0.7)", "rgba(255,255,255,0)"]}
					style={styles.linearGradient}
					locations={[0, 1]}
				>
					<Text style={styles.title}>{props.event.title}</Text>
					<Text style={styles.descText}>{props.event.eventDate}</Text>
					<Text style={styles.descText}>{props.event.location}</Text>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

const Job = props => {
	return (
		<View style={styles.mainContainer}>
			<ImageBackground
				style={{ width: "100%", height: 200, opacity: 0.9 }}
				source={{ uri: props.event.image }}
				resizeMode="stretch"
			>
				<LinearGradient
					colors={["rgba(41, 128, 185,0.7)", "rgba(255,255,255,0)"]}
					style={styles.linearGradient}
					locations={[0, 1]}
				>
					<View styles={styles.titleContainer}>
						<Text style={styles.title}>{props.event.title}</Text>
					</View>
					<Text style={styles.descText}>{props.event.jobTitle}</Text>
					<Text style={styles.descText}>{props.event.email}</Text>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

const Post = props => {
	return (
		<View style={styles.mainContainer}>
			{props.event.image != "" && (
				<ImageBackground
					source={{ uri: props.event.image }}
					resizeMode="contain"
					style={{
						width: "100%",
						height: 200,
						opacity: 1
					}}
				>
					<LinearGradient
						colors={[
							"rgba(41, 128, 185,0.7)",
							"rgba(255,255,255,0)"
						]}
						style={styles.linearGradient}
					>
						<Text style={styles.title}>{props.event.title}</Text>
						<Text style={styles.descText}>
							{props.event.description}
						</Text>
					</LinearGradient>
				</ImageBackground>
			)}

			{props.event.image == "" && (
				<LinearGradient
					colors={["rgba(41, 128, 185,1)", "rgba(255,255,255,0.5)"]}
					style={styles.linearGradient}
				>
					<Text style={styles.title}>{props.event.title}</Text>
					<Text style={styles.descText}>
						{props.event.description}
					</Text>
				</LinearGradient>
			)}
		</View>
	);
};
const Announcement = props => {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>{props.event.title}</Text>
		</View>
	);
};

const Alumni = props => {
	return (
		<View style={styles.mainContainer}>
			<Text style={(styles.title, styles.postTitle)}>
				{props.event.title}
			</Text>
		</View>
	);
};

class ListingLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eventType: this.props.event.eventType
		};
	}
	render() {
		return (
			<View>
				{this.props.event.eventType == "event" && (
					<Event event={this.props.event} />
				)}

				{this.props.event.eventType == "announcement" && (
					<Announcement event={this.props.event} />
				)}

				{this.props.event.eventType == "jobVacancy" && (
					<Job event={this.props.event} />
				)}

				{this.props.event.eventType == "post" && (
					<Post event={this.props.event} />
				)}

				{this.props.event.eventType == "alumni" && (
					<Alumni event={this.props.event} />
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 10,
		paddingBottom: 5
	},
	descText: {
		fontSize: 15,
		color: "#fff",
		marginLeft: 10
	},
	title: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 25,
		marginLeft: 13
	},
	postContainer: {
		backgroundColor: "#575fcf"
	},
	titleContainer: {},
	eventContainer: {},
	alumniContainer: {},
	jobContainer: {},
	announcementContainer: {},
	postTitle: {
		color: "#ffd32a"
	},
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
		height: 200
	}
});

export default ListingLayout;
