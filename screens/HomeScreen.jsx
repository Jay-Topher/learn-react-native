import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Hello World</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Count")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("ColorScreen")}
      />
      <Button
        title="Go to Color Exercise"
        onPress={() => navigation.navigate("ColorEx")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate("BoxScreen")}
      />
      <Button
        title="Go to Box Exercise"
        onPress={() => navigation.navigate("BoxExercise")}
      />
    </View>
  );
};

const styles = {
  title: {
    fontSize: 45
  }
};

export default HomeScreen;
