import React from "react";
import {
  ShowController,
  ShowView,
  SimpleShowLayout,
  UrlField,
  TextField,
  DateField,
} from "react-admin";

export const ShowInvestor = (props) => {
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <ShowView
          {...props}
          {...controllerProps}
          title="Xem thông tin chủ đầu tư"
        >
          <SimpleShowLayout>
            <TextField source="username" label="Tên tài khoản" />
            <TextField source="investorName" label="Tên chủ đầu tư" />
            <TextField source="email" label="Email" />
            <TextField source="address" label="Địa chỉ" />
            <TextField source="desc" label="Mô tả" />
            <UrlField source="website" label="Website" />
            <TextField source="fax" label="Fax" />
            <TextField source="phoneNumber" label="Số điện thoại" />
            <DateField label="Publication date" source="created_at" />
          </SimpleShowLayout>
        </ShowView>
      )}
    </ShowController>
  );
};
