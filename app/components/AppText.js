import React from "react";
import { Text, View } from "react-native";

import defaultStyles from "../config/styles";

export const AppText = ({ children, style, ...otherProps }) => {
  return (
    <View style={style}>
      <Text style={[defaultStyles.text, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
};
