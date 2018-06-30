import React, { Component } from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	Platform,
	Button,
	View
} from "react-native";
import firebase from "react-native-firebase";
import RNFetchBlob from "react-native-fetch-blob";

var ImagePicker = require("react-native-image-picker");

// More info on all the options is below in the README...just some common use cases shown here
var options = {
	title: "Select Avatar",
	customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
	storageOptions: {
		skipBackup: true,
		path: "images"
	}
};

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export default class App extends Component {
	constructor() {
		super();
		this.getImage = this.getImage.bind(this);
		this.state = {
			image_uri: "https://avatars0.githubusercontent.com/u/12028011?v=3&s=200"
		};
	}

	uploadImage(uri, mime = "application/octet-stream") {
		return new Promise((resolve, reject) => {
			const uploadUri =
				Platform.OS === "ios" ? uri.replace("file://", "") : uri;
			let uploadBlob = null;

			const imageRef = firebase
				.storage()
				.ref("images")
				.child(Date.now());

			fs.readFile(uploadUri, "base64")
				.then(data => {
					return Blob.build(data, { type: `${mime};BASE64` });
				})
				.then(blob => {
					uploadBlob = blob;
					return imageRef.put(uri, { contentType: mime });
				})
				.then(() => {
					uploadBlob.close();
					return imageRef.getDownloadURL();
				})
				.then(url => {
					resolve(url);
				})
				.catch(error => {
					reject(error);
				});
		});
	}

	getImage() {
		ImagePicker.showImagePicker(options, response => {
			console.log("Response = ", response);

			if (response.didCancel) {
				// console.log("User cancelled image picker");
			} else if (response.error) {
				// console.log("ImagePicker Error: ", response.error);
			} else if (response.customButton) {
				// console.log("User tapped custom button: ", response.customButton);
			} else {
				// let source = { uri: response.uri };
				// this.setState({image_uri: response.uri})

				// You can also display the image using data:
				// let image_uri = { uri: 'data:image/jpeg;base64,' + response.data };

				this.uploadImage(response.uri)
					.then(url => {
						alert("uploaded");
						this.setState({ image_uri: url });
						this.props.returnImageURI(url);

						// url is the path on firebase storage
					})
					.catch(error => console.log(error));
			}
		});
	}
	someFn = () => {
		listInfo = this.state.image_uri;
		console.log(listInfo);
	};

	returnImageURI() {
		imageURI = this.state.image_uri;
		console.log("Gallery", imageURI);
		this.props.profilePhotoPath(imageURI);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image
					source={{
						uri:
							"https://firebasestorage.googleapis.com/v0/b/infinite-mantis-140010.appspot.com/o/images%2F1530350514404?alt=media&token=2807640b-787a-4000-b693-e3c8e526bba2"
					}}
				/>
				<Button
					onPress={this.getImage}
					title="Upload Profile Photo"
					color="#841584"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
