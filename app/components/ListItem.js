import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { AppText } from "./AppText";

export const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 10,
  },

  title: {
    fontWeight: "400",
    paddingBottom: 5,
  },

  subTitle: {
    color: colors.mediumGray,
  },
});
