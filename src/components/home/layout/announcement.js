'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,

} from 'react-native';

class announcement extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	dateCreated: "",
    	title: "",
    	eventType: "",
    	description: "",
    	mastermind: ""
    };
  }
  
  render() {
    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({

});


export default announcement;