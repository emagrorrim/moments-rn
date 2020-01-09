import React from 'react';
import UUID from 'react-native-uuid';

import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

const MomentListItem = props => {
  const moment = props.moment;
  return (
      <View style={styles.container}>
        <View>
          <Image style={styles.avatar} source={{uri: moment.sender.avatar}}/>
        </View>
        <View style={styles.content}>
          <Text style={styles.username}>{moment.sender.nick}</Text>
          {moment.content !== undefined ? <Text style={styles.contentText}>{moment.content}</Text> : undefined}
          <View style={styles.imageGrid}>
            {moment.images.map(img => (
                <Image style={styles.image} key={UUID()} source={{uri: img.url}}/>
            ))}
          </View>
          {moment.comments !== undefined && moment.comments.length !== 0 ?
              (
                  <View style={styles.comments}>
                    {moment.comments.map(comment => (
                        <View key={comment.id}>
                          <Text><Text style={styles.username}>{comment.sender.nick}</Text>{": " + comment.content}
                          </Text>
                        </View>
                    ))}
                  </View>
              ) : undefined}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12
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
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  image: {
    width: 100,
    height: 100,
    marginEnd: 4,
    marginTop: 4
  },
  comments: {
    flex: 1,
    backgroundColor: "#F3F3F5",
    marginTop: 4,
    paddingLeft: 4,
    paddingVertical: 4
  }
});

export default MomentListItem;