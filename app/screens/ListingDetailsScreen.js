import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { ListItem } from "../components/ListItem";
import { AppText } from "../components/AppText";
import colors from "../config/colors";

export const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        source={require("../assets/gray-sweater.jpg")}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Gray Sweater for sell</AppText>
        <AppText style={styles.price}>${100}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/profilepic.jpg")}
            title="Didas Mbalanya"
            subTitle="6 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
