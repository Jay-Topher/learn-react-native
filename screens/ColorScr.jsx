import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorSelector from "../components/ColorSelector";

const COLOR_INCREMENT = 15;

const ColorExercise = () => {
  const [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0
  });

  const onIncrease = colz => {
    setColor({
      ...color,
      [colz]: color[colz] + COLOR_INCREMENT
    });
  };
  const onDecrease = colz => {
    setColor({
      ...color,
      [colz]: color[colz] - COLOR_INCREMENT
    });
  };
  return (
    <View>
      <ColorSelector
        text="Red"
        increase={() => onIncrease("red")}
        decrease={() => onDecrease("red")}
        disabledDecrease={color.red <= 0 ? true : false}
        disabledIncrease={color.red >= 255 ? true : false}
      />
      <ColorSelector
        text="Green"
        increase={() => onIncrease("green")}
        decrease={() => onDecrease("green")}
        disabledDecrease={color.green <= 0 ? true : false}
        disabledIncrease={color.green >= 255 ? true : false}
      />
      <ColorSelector
        text="Blue"
        increase={() => onIncrease("blue")}
        decrease={() => onDecrease("blue")}
        disabledDecrease={color.blue <= 0 ? true : false}
        disabledIncrease={color.blue >= 255 ? true : false}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${color.red}, ${color.blue}, ${color.green})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorExercise;
