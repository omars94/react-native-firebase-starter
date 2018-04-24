import React from "react";
import { Platform, Button, Text, ScrollView, StatusBar } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  SafeAreaView
} from "react-navigation";

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>{banner}</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
      <Button
        onPress={() => navigation.navigate("Email")}
        title="Open other screen"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </SafeAreaView>
    <StatusBar barStyle="default" />
  </ScrollView>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={"Inbox Screen"} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: "Inbox"
};

const EmailScreen = ({ navigation }) => (
  <MyNavScreen banner={"Email Screen"} navigation={navigation} />
);

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={"Drafts Screen"} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: "Drafts"
};

const InboxStack = StackNavigator({
  Inbox: { screen: InboxScreen },
  Email: { screen: EmailScreen }
});

const DraftsStack = StackNavigator({
  Drafts: { screen: DraftsScreen },
  Email: { screen: EmailScreen }
});

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      screen: InboxStack
    },
    Drafts: {
      screen: DraftsStack
    }
  },
  {
    initialRouteName: "Drafts",
    contentOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

export default DrawerExample;
