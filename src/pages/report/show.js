import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  FileField,
  RichTextField,
} from "react-admin";

export const ShowReport = (props) => {
  return (
    <Show {...props} title="Xem báo cáo">
      <SimpleShowLayout>
        <TextField source="title" label="Tên báo cáo" />
        <RichTextField source="body" label="Mô tả" />
        <TextField source="projectName" label="Dự án" />
        <FileField source="attachment.attachment" title="File đính kèm" />
      </SimpleShowLayout>
    </Show>
  );
};
