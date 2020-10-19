import React, { useState } from "react";
import { Switch, TextInput } from "react-native";
import { AppPicker } from "./app/components/AppPicker";
import { AppTextInput } from "./app/components/AppTextInput";

import { Screen } from "./app/components/Screen";

const categories = [
  {
    label: "Funiture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Electronics",
    value: 3,
  },
];

export default () => {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        placeholder="Category"
        icon="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
};
