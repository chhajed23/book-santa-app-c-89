import * as React from "react";
import {Icon} from "react-native-elements";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./appTabNavigator";
import CustomSideBarMenu from "./customSideBarMenu";
import SettingScreen from "../screens/settingScreen";
import MyDonationScreen from "../screens/myDonations";
import NotificationScreen from "../screens/notificationScreen";
import MyReceivedBooksScreen from "../screens/myReceivedBooksScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { 
      screen: AppTabNavigator,
      navigationOptions:{
        drawerIcon:<Icon name="home" type="fontawesome5"/>
      }
     },
    MyDonations: { screen: MyDonationScreen,
      navigationOptions:{
        drawerIcon:<Icon name="gift" type="font-awesome"/>,
        drawerLabel:"My Donations"
      } },
    Notifications: { screen: NotificationScreen,
      navigationOptions:{
        drawerIcon:<Icon name="bell" type="font-awesome"/>,
        drawerLabel:"Notifications"
      } },
    MyReceivedBooks: {
      screen: MyReceivedBooksScreen,
      navigationOptions:{
        drawerIcon:<Icon name="gift" type="font-awesome"/>,
        drawerLabel:"My Received Books"
      }
    },
    Settings: { screen: SettingScreen,
      navigationOptions:{
        drawerIcon:<Icon name="settings" type="fontawesome5"/>,
        drawerLabel:"Settings"
      } },
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: "Home" }
);
