import React from "react";
import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";
export const ShowAccount = (props) => {
  return (
    <Show {...props} title="Xem">
      <SimpleShowLayout>
        <TextField source="userType" label="Loại tài khoản" />
        <TextField source="username" label="Tên tài khoản" />
        <TextField source="displayName" label="Tên hiển thị" />
        <TextField source="email" label="Email" />
        <TextField source="address" label="Địa chỉ" />
        <TextField source="desc" label="Mô tả" />
        <TextField source="website" label="Website" />
        <TextField source="phoneNumber" label="Số điện thoại" />
        <TextField source="fax" label="Fax" />
        <DateField label="Publication date" source="created_at" />
      </SimpleShowLayout>
    </Show>
  );
};
