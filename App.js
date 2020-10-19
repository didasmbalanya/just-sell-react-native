import React, { useState } from "react";
import { TextInput } from "react-native";
import { AppTextInput } from "./app/components/AppTextInput";

import { Screen } from "./app/components/Screen";

export default () => {
  const [value, setValue] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
};
