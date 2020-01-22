// import React from "react";
// import { Text, View } from "react-native";
// // import {createAppContainer, createStackNavigator} from 'react-navigation'
import ComponentScreen from "./screens/ComponentScreen";
import ListScreen from "./screens/ListScreen";
import HomeScreen from "./screens/HomeScreen";

// // const navigator = createStackNavigator(
// //   {
// //     Components: ComponentScreen,
// //     List: ListScreen
// //   },
// //   {
// //     initialRouteName
// //   }
// // )

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <ComponentScreen /> */}
//       <HomeScreen />
//       {/* <ListScreen /> */}
//     </View>
//   );
// }

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     // alignItems: "center",
//     // justifyContent: "center",
//     width: "100%"
//   },
//   text: {
//     color: "white"
//   }
// };

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ImageScreen from "./screens/ImageScreen";
import CounterScreen from "./screens/CounterScreen";
import ColorScreen from "./screens/ColorScreen";
import ColorExercise from "./screens/ColorExercise";
import TextScreen from "./screens/TextScreen";
import BoxScreen from "./screens/BoxScreen";
import BoxScreenEx from "./screens/BoxScreenEx";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Component: ComponentScreen,
    ImageScreen: ImageScreen,
    Count: CounterScreen,
    ColorScreen: ColorScreen,
    ColorEx: ColorExercise,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
    BoxExercise: BoxScreenEx
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
