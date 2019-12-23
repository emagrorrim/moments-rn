import React from "react";

import TabBar from "../../common/TabBar";
import MomentScreen from "../moment/MomentScreen";
import DocumentScreen from "../helper/DocumentScreen";

const Tab = TabBar({
  Moment: MomentScreen,
  Document: DocumentScreen,
});

const MainScreen = () => <Tab/>;

export default MainScreen;