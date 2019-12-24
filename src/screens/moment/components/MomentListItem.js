import React from 'react';

import { Text } from "react-native";

const MomentListItem = (props) => {
  return (
    <Text>{props.item.title}</Text>
  );
};

export default MomentListItem;