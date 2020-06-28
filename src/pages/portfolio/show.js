import React from "react";
import { Show, SimpleShowLayout, TextField, FileField } from "react-admin";

export const ShowPortfolio = (props) => {
  return (
    <Show {...props} title="Xem hạng mục">
      <SimpleShowLayout>
        <TextField source="name" label="Tên hạng mục" />
        <TextField source="desc" label="Mô tả" />
        <TextField source="projectName" label="Dự án" />
        <FileField source="attachment.attachment" title="File đính kèm" />
      </SimpleShowLayout>
    </Show>
  );
};
