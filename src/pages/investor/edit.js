import React from "react";
import {
  TextInput,
  Edit,
  SimpleForm,
  required,
  email,
  NumberInput,
} from "react-admin";
import { EditToolbar } from "../../components";

export const InvestorEdit = (props) => {
  return (
    <Edit {...props} title="Sửa chủ đầu tư">
      <SimpleForm
        warnWhenUnsavedChanges
        toolbar={<EditToolbar />}
        redirect="show"
      >
        <TextInput
          source="accountType"
          label="Loại tài khoản"
          variant="standard"
          defaultValue="INVESTOR"
          style={{ display: "none" }}
        />
        <TextInput
          source="investorName"
          variant="standard"
          label={"Tên chủ đầu tư"}
          validate={required("Bạn chưa nhập tên!")}
          fullWidth
        />
        <TextInput
          source="email"
          label="Email"
          variant="standard"
          fullWidth
          validate={[
            required("Bạn chưa nhập email!"),
            email("Email chưa đúng định dạng!"),
          ]}
        />
        <TextInput
          source="address"
          variant="standard"
          label="Địa chỉ"
          fullWidth
        />

        <TextInput source="desc" variant="standard" label="Mô tả" fullWidth />

        <TextInput
          source="website"
          variant="standard"
          label="Website"
          fullWidth
        />

        <TextInput source="fax" variant="standard" label="Fax" fullWidth />
        <NumberInput
          source="phoneNumber"
          variant="standard"
          label="Số điện thoại"
          fullWidth
        />
      </SimpleForm>
    </Edit>
  );
};
