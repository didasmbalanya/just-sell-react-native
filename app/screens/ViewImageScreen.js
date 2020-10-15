import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.secondary}
          size={35}
        />
      </View>
      <Image source={require("../assets/login-bg.jpg")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    left: 30,
    top: 40,
  },
  deleteIcon: {
    position: "absolute",
    right: 30,
    top: 40,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
