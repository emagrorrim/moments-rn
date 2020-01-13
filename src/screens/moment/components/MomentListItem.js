import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

import CommentList from "./CommentList";
import ImageGrid from "./ImageGrid";

const MomentListItem = props => {
  const moment = props.moment;
  return <View style={styles.container}>
    <View>
      <Image style={styles.avatar} source={{uri: moment.sender.avatar}}/>
    </View>
    <View style={styles.content}>
      <Text style={styles.username}>{moment.sender.nick}</Text>
      {
        moment.content !== undefined
            ? <Text style={styles.contentText}>{moment.content}</Text>
            : undefined
      }
      {
        moment.images !== undefined && moment.images.length !== 0
            ? <ImageGrid images={moment.images}/>
            : undefined
      }
      {
        moment.comments !== undefined && moment.comments.length !== 0
            ? <CommentList comments={moment.comments}/>
            : undefined
      }
    </View>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCCCCC"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 4
  },
  content: {
    paddingLeft: 8,
    flex: 1
  },
  username: {
    fontWeight: "bold",
    color: "#5E6A8C"
  },
  contentText: {
    paddingVertical: 4
  }
});

export default MomentListItem;