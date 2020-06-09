import React from "react";
import {
  ShowController,
  ShowView,
  SimpleShowLayout,
  UrlField,
  TextField,
  DateField,
  FunctionField,
} from "react-admin";

export const ShowAccount = (props) => {
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <ShowView {...props} {...controllerProps} title="Xem">
          <SimpleShowLayout>
            <FunctionField
              label="Loại tài khoản"
              render={(record) =>
                record.accountType === "MINISTRY" ? "Bộ" : "Chủ đầu tư"
              }
            />
            <TextField source="username" label="Tên tài khoản" />
            {controllerProps.record && controllerProps.record.investorName && (
              <TextField source="investorName" label="Tên chủ đầu tư" />
            )}
            <TextField source="email" label="Email" />
            <TextField source="address" label="Địa chỉ" />
            {controllerProps.record && controllerProps.record.desc && (
              <TextField source="desc" label="Mô tả" />
            )}
            {controllerProps.record && controllerProps.record.website && (
              <UrlField source="website" label="Website" />
            )}
            {controllerProps.record && controllerProps.record.fax && (
              <TextField source="fax" label="Fax" />
            )}
            <TextField source="phoneNumber" label="Số điện thoại" />
            <DateField label="Publication date" source="created_at" />
          </SimpleShowLayout>
        </ShowView>
      )}
    </ShowController>
  );
};
