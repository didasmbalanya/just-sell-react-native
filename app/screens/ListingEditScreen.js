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
import { FormImagePicker } from "../components/forms/FormImagePicker";
import { Screen } from "../components/Screen";
import { useLocation } from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { backgroundColor: "red", icon: "apps", label: "Funiture", value: 1 },
  { backgroundColor: "green", icon: "email", label: "Clothing", value: 2 },
  { backgroundColor: "blue", icon: "lock", label: "Cars", value: 3 },
  { backgroundColor: "red", icon: "apps", label: "Funiture", value: 4 },
  { backgroundColor: "green", icon: "email", label: "Clothing", value: 5 },
  { backgroundColor: "blue", icon: "lock", label: "Cars", value: 6 },
  {
    backgroundColor: "red",
    icon: "apps",
    label: "Wood and other thinfs",
    value: 7,
  },
  { backgroundColor: "green", icon: "email", label: "Clothing", value: 8 },
  { backgroundColor: "blue", icon: "lock", label: "Cars", value: 9 },
];

export const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) =>
          console.log("values :", values, "\n >>>>>>>> \n", location)
        }
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
  container: {
    margin: 10,
  },
});
