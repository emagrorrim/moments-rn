import {Image, StyleSheet, View} from "react-native";
import React, {Component} from "react";
import UUID from "react-native-uuid";

const DISPLAY_MODE = {
  ONE_LARGE_IMAGE: "ONE_LARGE_IMAGE",
  FOUR_IMAGES: "FOUR_IMAGES",
  STANDARD: "STANDARD"
};

export default class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageRadio: 1
    };
  }

  componentDidMount() {
    const mode = this._displayMode(this.props.images.length);
    if (mode !== DISPLAY_MODE.ONE_LARGE_IMAGE) {
      return;
    }
    Image.getSize(this.props.images[0].url, (width, height) => {
      this.setState({
        mainImageRadio: width / height
      });
    });
  }

  render() {
    const mode = this._displayMode(this.props.images.length);
    let imageStyle;
    if (mode === DISPLAY_MODE.STANDARD) {
      imageStyle = styles.image;
    } else if (mode === DISPLAY_MODE.FOUR_IMAGES) {
      imageStyle = styles.largeImage;
    } else if (mode === DISPLAY_MODE.ONE_LARGE_IMAGE) {
      imageStyle = Object.assign({}, styles.mainImage, {aspectRatio: this.state.mainImageRadio});
    }
    return <View style={mode === DISPLAY_MODE.FOUR_IMAGES ? styles.imageGrid_4 : styles.imageGrid}>
      {this.props.images.map(img =>
          <Image
              style={imageStyle}
              key={UUID()}
              source={{uri: img.url}}
          />
      )}
    </View>
  }

  _displayMode = imageCount => {
    switch (imageCount) {
      case 1:
        return DISPLAY_MODE.ONE_LARGE_IMAGE;
      case 4:
        return DISPLAY_MODE.FOUR_IMAGES;
      default:
        return DISPLAY_MODE.STANDARD;
    }
  };
}

const styles = StyleSheet.create({
  imageGrid: {
    flexDirection: "row",
    justifyContent: 'space-between',
    flexWrap: "wrap",
    maxWidth: 300,
  },
  imageGrid_4: {
    width: '66%',
    flexDirection: "row",
    justifyContent: 'space-between',
    flexWrap: "wrap",
    maxWidth: 200,
  },
  image: {
    width: '32.5%',
    height: 50,
    aspectRatio: 1,
    marginTop: 5
  },
  largeImage: {
    width: '49%',
    height: 50,
    aspectRatio: 1,
    marginTop: 5
  },
  mainImage: {
    resizeMode: 'cover',
    height: 120,
    aspectRatio: 1,
    marginTop: 5,
  }
});