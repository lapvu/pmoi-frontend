import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";
import { ListActions, Filters } from "../../components";

export const AccountList = (props) => {
  return (
    <List
      {...props}
      title="Tài khoản"
      actions={<ListActions />}
      filters={<Filters />}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="username" label="Tên tài khoản" />
        <TextField source="displayName" label="Tên" />
        <TextField source="email" label="Email" />
        <TextField source="userType" label="Loại tài khoản" />
        <EditButton label="Sửa" />
      </Datagrid>
    </List>
  );
};
