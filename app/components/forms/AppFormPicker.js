import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import { AppPicker } from "../AppPicker";
import { ErrorMessage } from "./ErrorMessage";

export const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        width={width}
        selectedItem={[values[name]]}
        numberOfColumns={numberOfColumns}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({});
