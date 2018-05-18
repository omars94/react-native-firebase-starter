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
			isLoading: false
		};
	}
	componentDidMount() {
		this.loadMessages();
	}
	sendMessage() {
		let currentUser = firebase.auth().currentUser;
		let createdAt = new Date().getTime();
		let chatMessage = {
			text: this.state.message,
			createdAt: createdAt,
			user: {
				id: currentUser.uid,
				email: currentUser.email
			},
			recipients: "a b_b a"
		};
		firebase
			.database()
			.ref("Messages")
			.push()
			.set(chatMessage, error => {
				alert(error);
			});
	}
	loadMessages() {
		let currentUser = firebase.auth().currentUser;
		let recipients = ["a b_b a", "b a_a b"];

		this.setState({
			isLoading: true
		});

		// from: this.state.from,
		// to: "txbs8LkhL0f71kMWxG4hUxk9pB82"
		let messages1, messages2;
		firebase
			.database()
			.ref("Messages")
			.limitToLast(50)
			.orderByChild("recipients")
			.equalTo(recipients[0])
			.on(
				"value",
				snapshot => {
					messages1 = snapshot.val();
				},
				errorObject => {
					// alert(errorObject.message);
				}
			);

		firebase
			.database()
			.ref("Messages")
			.limitToLast(50)
			.orderByChild("recipients")
			.equalTo(recipients[1])
			.on(
				"value",
				snapshot => {
					messages2 = snapshot.val();
					messages = Object.assign({}, messages1, messages2);
					this.setState({
						messages: messages,
						isLoading: false
					});
					console.log(this.state.messages);
				},
				errorObject => {
					// alert(errorObject.message);
				}
			);
	}
	renderMessages() {
		return Object.keys(this.state.messages).map(messageid => {
			let message = this.state.messages[messageid];
			let currentUser = firebase.auth().currentUser;
			let content = (
				<Card>
					<CardItem header bordered>
						<Text>{message.user.id}</Text>
					</CardItem>
					<CardItem bordered>
						<Body>
							<Text>{message.text}</Text>
						</Body>
					</CardItem>
					<CardItem bordered footer>
						<Text note>date</Text>
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
				<Content padder>
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

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
