import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: colors.lightGray,
    marginVertical: 5,
  },
});
