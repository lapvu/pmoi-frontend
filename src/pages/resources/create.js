import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  SaveButton,
  Toolbar,
  number,
} from "react-admin";

const ResourceCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Lưu" redirect={false} submitOnEnter={false} />
  </Toolbar>
);

export const ResourceCreate = (props) => {
  return (
    <Create {...props} title="Thêm mới nguồn vốn">
      <SimpleForm
        variant="standard"
        warnWhenUnsavedChanges
        toolbar={<ResourceCreateToolbar />}
        redirect="list"
      >
        <TextInput
          source="name"
          label="Tên nguồn vốn"
          fullWidth
          validate={required("Bạn chưa nhập tên nguồn vốn!")}
        />
        <TextInput source="shortName" label="Tên viết tắt" fullWidth />
        <TextInput
          source="time"
          label="Lần điều chỉnh"
          fullWidth
          validate={[required("Bạn chưa có lần điều chỉnh!")]}
        />
        <TextInput
          source="amount"
          label="giá trị"
          fullWidth
          validate={[
            required("Bạn chưa nhập số tiền!"),
            number("Sai định dạng!"),
          ]}
        />
        <TextInput source="desc" label="Mô tả" fullWidth />
      </SimpleForm>
    </Create>
  );
};
