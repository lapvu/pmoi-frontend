import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  email,
  SelectInput,
  PasswordInput,
  NumberInput,
  SaveButton,
  Toolbar,
} from "react-admin";

const validateAccountCreation = (values) => {
  const errors = {};
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = ["Mật khẩu không khớp!"];
  }
  if (values.password && values.password.length < 6) {
    errors.password = ["Mật khẩu cần có 6 ký tự trở lên!"];
  }
  return errors;
};

const AccountCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Lưu" redirect="list" submitOnEnter={false} />
  </Toolbar>
);

export const AccountCreate = (props) => {
  const [accountType, setAccountType] = useState("");

  return (
    <Create
      {...props}
      title="Thêm mới tài khoản"
      successMessage="Thêm tài khoản thành công!"
    >
      <SimpleForm
        variant="standard"
        validate={validateAccountCreation}
        warnWhenUnsavedChanges
        toolbar={<AccountCreateToolbar />}
      >
        <SelectInput
          source="accountType"
          label="Loại tài khoản"
          fullWidth
          choices={[
            { id: "MINISTRY", name: "Bộ" },
            { id: "INVESTOR", name: "Chủ đầu tư" },
          ]}
          onChange={(e) => setAccountType(e.target.value)}
          validate={required("Bạn cần chọn loại tài khoản!")}
        />
        {accountType === "INVESTOR" && (
          <TextInput
            source="investorName"
            label={"Tên chủ đầu tư"}
            validate={required("Bạn chưa nhập tên!")}
            fullWidth
          />
        )}
        <TextInput
          source="username"
          label="Tên tài khoản"
          fullWidth
          validate={required("Bạn chưa nhập tên tài khoản!")}
        />
        <TextInput
          source="email"
          label="Email"
          fullWidth
          validate={[
            required("Bạn chưa nhập email!"),
            email("Email chưa đúng định dạng!"),
          ]}
        />
        <PasswordInput
          source="password"
          label="Mật khẩu"
          fullWidth
          validate={required("Bạn chưa nhập mật khẩu!")}
        />
        <PasswordInput
          source="confirmPassword"
          label="Xác nhận mật khẩu"
          fullWidth
          validate={required("Bạn cần xác nhận lại mật khẩu!")}
        />
        <TextInput source="address" label="Địa chỉ" fullWidth />
        {accountType === "INVESTOR" && (
          <TextInput source="desc" label="Mô tả" fullWidth />
        )}
        {accountType === "INVESTOR" && (
          <TextInput source="website" label="Website" fullWidth />
        )}
        {accountType === "INVESTOR" && (
          <TextInput source="fax" label="Fax" fullWidth />
        )}
        <NumberInput source="phoneNumber" label="Số điện thoại" fullWidth />
      </SimpleForm>
    </Create>
  );
};
