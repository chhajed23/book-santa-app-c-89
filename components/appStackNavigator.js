import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";
import BookDonateScreen from "../screens/bookDonateScreen";
import ReceiverDetailsScreen from "../screens/receiverDetailScreen";

export const AppStackNavigator = createStackNavigator(
  {
    BookDonateList: {
      screen: BookDonateScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    ReceiverDetails: {
      screen: ReceiverDetailsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "BookDonateList",
  }
);
