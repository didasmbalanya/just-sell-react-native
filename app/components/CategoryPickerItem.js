import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AppText } from "./AppText";
import { Icon } from "./Icon";

export const CategoryPickerItem = ({
  onPress,
  item: { backgroundColor, label, icon },
}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon backgroundColor={backgroundColor} name={icon} size={80} />
        <AppText style={styles.label}>{label}</AppText>
      </TouchableWithoutFeedback>
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
