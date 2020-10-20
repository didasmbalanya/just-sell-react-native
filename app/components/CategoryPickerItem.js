import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppText } from "./AppText";
import { Icon } from "./Icon";

export const CategoryPickerItem = ({
  onPress,
  item: { backgroundColor, label, icon },
}) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={backgroundColor} name={icon} size={80} />
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },

  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
