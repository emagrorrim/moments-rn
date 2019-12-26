import React from 'react';

import { View, Text } from "react-native";

const MomentListItem = (props) => {
  return (
      <View>
        <Text>{props.moment.content}</Text>
      </View>
  );
};

export default MomentListItem;