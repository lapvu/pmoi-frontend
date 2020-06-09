import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
} from "react-admin";
import { ListActions, Filters } from "../../components";

export const InvestorList = (props) => {
  return (
    <List
      {...props}
      title="Danh sách chủ đầu tư"
      actions={<ListActions />}
      filters={<Filters />}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="username" label="Tên tài khoản" />
        <FunctionField
          label="Tên Chủ đầu tư"
          render={(record) => record.investorName || null}
        />
        <TextField source="email" label="Email" />
        <EditButton label="Sửa" />
      </Datagrid>
    </List>
  );
};
