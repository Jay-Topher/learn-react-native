import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreenEx = () => {
  return (
    <View>
      <Text>Exercise</Text>
      <View style={styles.parentView}>
        <View style={styles.viewOne} />
        <View style={styles.viewTwo} />
        <View style={styles.viewThree} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    height: 500,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOne: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  },
  viewTwo: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    top: 100
  },
  viewThree: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  }
});

export default BoxScreenEx;
