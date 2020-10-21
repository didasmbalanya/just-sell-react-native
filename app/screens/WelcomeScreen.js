import React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { AppButton } from "../components/AppButton";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={7}
      source={require("../assets/login-bg.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
