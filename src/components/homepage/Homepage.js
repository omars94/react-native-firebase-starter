
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  createStackNavigator,
  createDrawerNavigator,
  SafeAreaView,
} from 'react-navigation';

import Login from '../login/Login'
import SignUpForm from '../login/SignUpForm'
class Homepage extends Component {
  render() {
    return (
    	<View>
    	</View>
    );
  }
}

const sideMenu = ({ navigation }) => (
	<View />
);

const DrawerExample = createDrawerNavigator(
  {
  	Login: {
      screen: Login,
    },
    SignUp: {
      screen: SignUpForm,
    },
  },
  {
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);
const styles = StyleSheet.create({

});


export default Homepage;