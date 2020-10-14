import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { AppButton } from "./app/components/AppButton";

const view = (0 && <ViewImageScreen />) || <WelcomeScreen />;
export default () => {
  return view;
};
