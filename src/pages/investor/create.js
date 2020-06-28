import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  email,
  PasswordInput,
  NumberInput,
  SaveButton,
  Toolbar,
} from "react-admin";

const validateInvestorCreation = (values) => {
  const errors = {};
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = ["Mật khẩu không khớp!"];
  }
  if (values.password && values.password.length < 6) {
    errors.password = ["Mật khẩu cần có 6 ký tự trở lên!"];
  }
  return errors;
};

const InvestorCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Lưu" redirect="show" submitOnEnter={false} />
  </Toolbar>
);

export const InvestorCreate = (props) => {
  return (
    <Create {...props} title="Thêm mới chủ đầu tư">
      <SimpleForm
        variant="standard"
        validate={validateInvestorCreation}
        warnWhenUnsavedChanges
        toolbar={<InvestorCreateToolbar />}
        redirect="show"
      >
        <TextInput
          source="accountType"
          defaultValue="INVESTOR"
          label="Loại tài khoản"
          style={{ display: "none" }}
        />
        <TextInput
          source="investorName"
          label={"Tên chủ đầu tư"}
          validate={required("Bạn chưa nhập tên!")}
          fullWidth
        />
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
        <TextInput source="desc" label="Mô tả" fullWidth />
        <TextInput source="website" label="Website" fullWidth />
        <TextInput source="fax" label="Fax" fullWidth />
        <NumberInput source="phoneNumber" label="Số điện thoại" fullWidth />
      </SimpleForm>
    </Create>
  );
};
