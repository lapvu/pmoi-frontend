import React from "react";
import { Filter, TextInput } from "react-admin";

export const Filters = (props) => (
  <Filter {...props} variant="standard">
    <TextInput label="Tìm kiếm" source="q" alwaysOn />
  </Filter>
);
