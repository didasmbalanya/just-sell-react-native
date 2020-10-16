import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";

import { Screen } from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Gray sweater for sale",
    price: 100,
    image: require("../assets/gray-sweater.jpg"),
  },
  {
    id: 1,
    title: "Cute Bull dog",
    price: 1000,
    image: require("../assets/bulldog.jpg"),
  },
];
export const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item: { image, price, title } }) => (
          <Card title={title} subTitle={`$${price}`} image={image} />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGray,
  },
});
