/* @flow */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
	Container,
	Content,
	Card,
	Body,
	Grid,
	Col,
	Row,
	CardItem,
	Text,
	Button,
	Right,
	Left,
	Icon,
	Header,
	Title,
	Input,
	Item
} from "native-base";
import firebase from "react-native-firebase";
export default class ChatUI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: null,
			message: "",
			isLoading: false,
			name: ""
		};
		timeSince = this.timeSince.bind(this);
	}
	componentDidMount() {
		this.loadMessages();
	}
	componentWillMount() {
		let currentUser = firebase.auth().currentUser;

		firebase
			.database()
			.ref("users/" + currentUser.uid)
			.once()
			.then(
				function(snapshot) {
					this.setState({
						name: snapshot.val().fullName
					});
				}.bind(this)
			)
			.catch(error => {});
		// a.setTimeOut({},1500);
	}
	sendMessage() {
		let currentUser = firebase.auth().currentUser;
		let createdAt = new Date().getTime();
		let chatMessage = {
			text: this.state.message,
			createdAt: createdAt,
			user: {
				id: currentUser.uid,
				email: currentUser.email,
				name: this.state.name
			},
			event: this.props.navigation.state.params.eventID
		};
		firebase
			.database()
			.ref("Messages")
			.push()
			.set(chatMessage, error => {});
	}
	loadMessages() {
		let currentUser = firebase.auth().currentUser;

		this.setState({
			isLoading: true
		});

		firebase
			.database()
			.ref("Messages")
			.limitToLast(50)
			.orderByChild("event")
			.equalTo(this.props.navigation.state.params.eventID)
			.on(
				"value",
				snapshot => {
					this.setState({
						messages: snapshot.val(),
						isLoading: false
					});
				},
				errorObject => {}
			);
	}
	timeSince(timeStamp) {
		var now = new Date(),
			secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
		if (secondsPast < 60) {
			return parseInt(secondsPast) + "s";
		}
		if (secondsPast < 3600) {
			return parseInt(secondsPast / 60) + "m";
		}
		if (secondsPast <= 86400) {
			return parseInt(secondsPast / 3600) + "h";
		}
		if (secondsPast > 86400) {
			day = timeStamp.getDate();
			month = timeStamp
				.toDateString()
				.match(/ [a-zA-Z]*/)[0]
				.replace(" ", "");
			year =
				timeStamp.getFullYear() == now.getFullYear()
					? ""
					: " " + timeStamp.getFullYear();
			return day + " " + month + year;
		}
	}

	renderMessages() {
		return Object.keys(this.state.messages)
			.reverse()
			.map(messageid => {
				let message = this.state.messages[messageid];
				let currentUser = firebase.auth().currentUser;
				let content = (
					<Card style={{ width: "75%" }}>
						<CardItem header bordered style={{ width: "75%" }}>
							<Text>{message.user.name} </Text>
						</CardItem>
						<CardItem bordered>
							<Body>
								<Text>{message.text}</Text>
							</Body>
						</CardItem>
						<CardItem bordered footer>
							<Text note>{timeSince(new Date(message.createdAt))} ago</Text>
							{message.user.id ==
								this.props.navigation.state.params.mastermind && (
								<Text note> - Master mind</Text>
							)}
						</CardItem>
					</Card>
				);
				if (message.user.id != currentUser.uid) {
					return (
						<Row key={messageid}>
							<Left>{content}</Left>
						</Row>
					);
				}
				return (
					<Row key={messageid}>
						<Right>{content}</Right>
					</Row>
				);
			});
	}

	render() {
		return (
			<Container>
				<Content
					padder
				>
					<Grid>
						{this.state.messages &&
							!this.state.isLoading &&
							this.renderMessages()}
						{this.state.isLoading && <Text> is Loading </Text>}
					</Grid>
				</Content>
				<View style={{ marginVertical: 10, height: 50, width: "100%" }}>
					<Grid padder>
						<Col style={{ width: "86%", paddingHorizontal: 5 }}>
							<Item rounded>
								<Input
									onChangeText={message => {
										this.setState({
											message: message
										});
									}}
									placeholder="enter message"
								/>
							</Item>
						</Col>
						<Col style={{ width: "13%", paddingHorizontal: 2 }}>
							<Button
								success
								style={{
									borderRadius: 25
								}}
								onPress={() => {
									{
										this.sendMessage();
									}
								}}
							>
								<Icon name="md-send" />
							</Button>
						</Col>
					</Grid>
				</View>
			</Container>
		);
	}
}
