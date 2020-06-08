import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
export const ShowResource = (props) => {
  return (
    <Show {...props} title="Xem">
      <SimpleShowLayout>
        <TextField source="name" label="Tên nguồn vốn" />
        <TextField source="desc" label="Mô tả" />
      </SimpleShowLayout>
    </Show>
  );
};
