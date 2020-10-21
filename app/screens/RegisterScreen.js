import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { Screen } from "../components/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name").max(255),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        validationSchema={validationSchema}
        onSubmit={({ email, password, name }) => {
          console.log("email: ", email);
          console.log("password: ", password);
          console.log("name: ", name);
        }}
      >
        <AppFormField
          name="name"
          autoCorrect={false}
          icon="face"
          placeholder="Name"
        />

        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 20,
  },
});
