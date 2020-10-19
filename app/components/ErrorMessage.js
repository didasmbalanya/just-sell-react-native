import React from "react";
import { StyleSheet } from "react-native";

import { AppText } from "./AppText";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.text}>{error}</AppText>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    height: 25,
  },
});
