import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default props => {
  return (
      <View style={styles.comments}>
        {props.comments.map(comment => (
            <View key={comment.id}>
              <Text>
                <Text style={styles.username}>{comment.sender.nick}</Text>
                {": " + comment.content}
              </Text>
            </View>
        ))}
      </View>
  )
}

const styles = StyleSheet.create({
  comments: {
    flex: 1,
    backgroundColor: "#F3F3F5",
    marginTop: 8,
    paddingLeft: 4,
    paddingVertical: 4
  },
  username: {
    fontWeight: "bold",
    color: "#5E6A8C"
  },
});