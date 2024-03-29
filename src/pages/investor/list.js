import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
  DeleteButton,
} from "react-admin";
import { ListActions } from "../../components";

export const InvestorList = (props) => {
  return (
    <List
      {...props}
      title="Danh sách chủ đầu tư"
      actions={<ListActions />}
      bulkActionButtons={false}
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
        <DeleteButton
          confirmTitle="Bạn có chắc muốn xóa chủ đầu tư này?"
          confirmContent=""
          label="Xóa"
          cancel="Hủy"
          undoable={false}
        />
      </Datagrid>
    </List>
  );
};
