import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { AppButton } from "../components/AppButton";
import colors from "../config/colors";

export class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={10}
        source={require("../assets/login-bg.jpg")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" color="secondary" />
        </View>
      </ImageBackground>
    );
  }
}

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
