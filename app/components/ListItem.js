import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { AppText } from "./AppText";

export const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>

          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.mediumGray}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },

  title: {
    fontWeight: "400",
    paddingBottom: 5,
  },

  subTitle: {
    color: colors.mediumGray,
  },
});
