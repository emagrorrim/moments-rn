import React from "react";

import TabBar from "../../common/TabBar";
import MomentScreen from "../moment/MomentScreen";
import DocumentScreen from "../helper/DocumentScreen";
import { createStackNavigator } from "react-navigation-stack"

const Tab = TabBar({
  Moment: createStackNavigator({
    MomentList: {
      screen: MomentScreen,
      navigationOptions: {
        title: "Moment"
      }
    }
  }, {title: "Moment"}),
  Document: DocumentScreen,
});

const MainScreen = () => <Tab />;

export default MainScreen;