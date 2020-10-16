import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ListItem } from "../components/ListItem";
import { ListItemDeleteAction } from "../components/ListItemDeleteAction";
import { ListItemSeparator } from "../components/ListItemSeparator";
import { Screen } from "../components/Screen";

const messagesData = [
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
  const [messages, setMessages] = useState(messagesData);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    // delete from the messages array
    setMessages(messages.filter(({ id }) => id !== message.id));
    // call api to delete from server
  };
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            onPress={() => console.log("message selected: ", item)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          // simulate fetch from server
          setMessages([
            {
              id: 1,
              title: "Message 1",
              description: "Descript 1",
              image: require("../assets/profilepic.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
