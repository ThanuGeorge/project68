import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Facebookscreen from "./screens/Facebookscreen";
import Instascreen from "./screens/Instascreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: Facebookscreen },
  Instagram: { screen: Instascreen }
});

const AppContainer = createAppContainer(TabNavigator);

