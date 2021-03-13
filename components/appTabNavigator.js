import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AppStackNavigator } from "./appStackNavigator";
import BookRequestScreen from "../screens/bookRequestScreen";

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-list.png")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Donate Books",
    },
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-book.png")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "Book Request",
    },
  },
});
