import React from "react";
import { View, Text } from "react-native";

const ComponentScren = () => {
  const name = "Jones";
  return (
    <View>
      <Text style={styles.title}>Getting started with react native!</Text>
      <Text style={styles.body}>My name is {name}</Text>
    </View>
  );
};

const styles = {
  title: {
    fontSize: 45
  },
  body: {
    fontSize: 20
  }
};

export default ComponentScren;
