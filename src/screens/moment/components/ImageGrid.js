import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import UUID from "react-native-uuid";

export default props => {
  return (
      <View style={styles.imageGrid}>
        {props.images.map(img => (
            <Image style={styles.image} key={UUID()} source={{uri: img.url}}/>
        ))}
      </View>
  )
}

const styles = StyleSheet.create({
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
});