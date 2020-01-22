import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return (state = state + 1);
    case "DECREASE":
      return (state = state - 1);

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: "INCREASE" })} />
      <Button title="Decrease" onPress={() => dispatch({ type: "DECREASE" })} />
      <Text>Current Count: {state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
