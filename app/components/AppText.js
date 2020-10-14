import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export const AppText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Roboto" : ""
  },
});
