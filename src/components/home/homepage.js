import makePage from '../createNavigator/createEvent';
import Events from './events';
import React, { Component } from "react";
import {
    Button,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import firebase from "react-native-firebase";
import IOSIcon from "react-native-vector-icons/Ionicons";
import { StackNavigator} from 'react-navigation'

class Homepage extends Component {
	render() {
		return <View />;
	}

	constructor(props) {
		super(props);

		this.state = {
			userType: ""
		};
	}
	componentDidMount() {
		firebase
			.database()
			.ref("events/")
			.once()
			.then(function(snapshot) {
				console.log(snapshot);
			});
	}
}

const EventStackNav = StackNavigator(
  {
    Events: {
        screen: Events,
        navigationOptions:({navigation}) => ({
            title: "BAU Events",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    makePage: {
      screen: makePage,
        navigationOptions: (props) => ({

        })
    }
},{
  initialRouteName: "Events",
  contentOptions: {
    activeTintColor: "#e91e63"
  }
})

const styles = StyleSheet.create({
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	}
});

export default EventStackNav;
