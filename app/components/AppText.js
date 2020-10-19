import React from "react";
import { Text, View } from "react-native";

import defaultStyles from "../config/styles";

export const AppText = ({ children, style }) => {
  return (
    <View style={style}>
      <Text style={[defaultStyles.text, style]}>{children}</Text>
    </View>
  );
};
