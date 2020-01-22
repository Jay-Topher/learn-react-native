import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColorSelector = ({
  text,
  increase,
  decrease,
  disabledDecrease,
  disabledIncrease
}) => {
  return (
    <View>
      <Text>{text}</Text>
      <Button
        onPress={increase}
        title={`More ${text}`}
        disabled={disabledIncrease}
      />

      <Button
        onPress={decrease}
        title={`Less ${text}`}
        disabled={disabledDecrease}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorSelector;
