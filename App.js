import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";

const view = (1 && <ViewImageScreen />) || <WelcomeScreen />;
export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "gray",
          shadowOffset: { height: 20, width: 50 },
          shadowOpacity: 1,
          shadowRadius: 20,
        }}
      ></View>
    </View>
  );
};
