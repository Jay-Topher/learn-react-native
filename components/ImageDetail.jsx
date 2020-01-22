import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = props => {
  return (
    <View style={styles.imageContainer}>
      <Image source={props.imageSource} />
      <View style={styles.textDesc}>
        <Text>{props.title}</Text>
        <Text>Image score - {props.score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#ddd",
    borderWidth: 1
  },
  textDesc: {
    marginLeft: 20
  }
});

export default ImageDetail;
