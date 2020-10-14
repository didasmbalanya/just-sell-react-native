import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

export class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/login-bg.jpg")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text>Sell what you don't need</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
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
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    backgroundColor: "lightgray",
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
});
