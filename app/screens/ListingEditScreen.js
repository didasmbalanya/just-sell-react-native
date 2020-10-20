import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { CategoryPickerItem } from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import { Screen } from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { backgroundColor: "red", icon: "apps", label: "Funiture", value: 1 },
  { backgroundColor: "green", icon: "email", label: "Clothing", value: 2 },
  { backgroundColor: "blue", icon: "lock", label: "Cars", value: 3 },
  { backgroundColor: "red", icon: "apps", label: "Funiture", value: 1 },
  { backgroundColor: "green", icon: "email", label: "Clothing", value: 2 },
  { backgroundColor: "blue", icon: "lock", label: "Cars", value: 3 },
  {
    backgroundColor: "red",
    icon: "apps",
    label: "Wood and other thinfs",
    value: 1,
  },
  { backgroundColor: "green", icon: "email", label: "Clothing", value: 2 },
  { backgroundColor: "blue", icon: "lock", label: "Cars", value: 3 },
];

export const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log("values :", values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <AppFormPicker
          items={categories}
          name="category"
          // numberOfColumns={3}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});
