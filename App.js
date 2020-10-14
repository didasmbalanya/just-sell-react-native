import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

import { Card } from "./app/components/Card";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";

const view = (0 && <ViewImageScreen />) || <WelcomeScreen />;
export default () => {
  return <ListingDetailsScreen />;
};
