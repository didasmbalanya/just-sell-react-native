import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

export const ImageContainer = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 140,
    margin: 20,
    padding: 2,
    backgroundColor: colors.lightGray,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
