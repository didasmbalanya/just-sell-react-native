import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem } from "../components/ListItem";
import { ListItemSeparator } from "../components/ListItemSeparator";
import { Screen } from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "Message 1",
    description: "Descript 1",
    image: require("../assets/profilepic.jpg"),
  },
  {
    id: 2,
    title: "Message 2",
    description: "Descript 2",
    image: require("../assets/profilepic.jpg"),
  },
  {
    id: 3,
    title: "Message 3",
    description: "Descript 3",
    image: require("../assets/profilepic.jpg"),
  },
];

export const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            subTitle={item.description}
            title={item.title}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
