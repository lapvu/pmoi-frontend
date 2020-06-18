import React from "react";
import { Show, SimpleShowLayout, TextField, FileField } from "react-admin";

export const ShowPortfolio = (props) => {
  return (
    <Show {...props} title="Xem hạng mục">
      <SimpleShowLayout>
        <TextField source="name" label="Tên hạng mục" />
        <TextField source="name" label="Hình thức thầu" />
        <TextField source="name" label="Số thứ tự thầu" />
        <TextField source="name" label="Phương pháp chọn thầu" />
        <TextField source="name" label="Hình thức đấu thầu" />
        <TextField source="name" label="Số quyết định văn bản" />
        <TextField source="name" label="Ngày ký" />
        <TextField source="desc" label="Mô tả" />
        <TextField source="projectName" label="Dự án" />
        <FileField source="attachment" title="File đính kèm" />
      </SimpleShowLayout>
    </Show>
  );
};
