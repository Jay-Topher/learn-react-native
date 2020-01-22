import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorSelector from "../components/ColorSelector";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return {
        ...state,
        red: state.red + action.payload
      };
    case "green":
      return {
        ...state,
        green: state.green + action.payload
      };
    case "blue":
      return {
        ...state,
        blue: state.blue + action.payload
      };
    default:
      return state;
  }
};

const ColorExercise = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorSelector
        text="Red"
        increase={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        decrease={() =>
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })
        }
        disabledDecrease={state.red <= 0 ? true : false}
        disabledIncrease={state.red >= 255 ? true : false}
      />
      <ColorSelector
        text="Green"
        increase={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        decrease={() =>
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
        }
        disabledDecrease={state.green <= 0 ? true : false}
        disabledIncrease={state.green >= 255 ? true : false}
      />
      <ColorSelector
        text="Blue"
        increase={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        decrease={() =>
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
        }
        disabledDecrease={state.blue <= 0 ? true : false}
        disabledIncrease={state.blue >= 255 ? true : false}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.blue}, ${state.green})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorExercise;
