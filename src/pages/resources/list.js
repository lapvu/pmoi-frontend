import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

import { ListActions } from "../../components";

export const ResourceList = (props) => {
  return (
    <List
      {...props}
      title="Nguồn vốn"
      actions={<ListActions />}
      bulkActionButtons={false}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="name" label="Tên" />
        <TextField source="shortName" label="Tên viết tắt" />
        <TextField source="desc" label="Mô tả" />
        <EditButton label="Sửa" />
        <DeleteButton
          confirmTitle="Bạn có chắc muốn xóa nguồn vốn này?"
          confirmContent=""
          label="Xóa"
          cancel="Hủy"
          undoable={false}
        />
      </Datagrid>
    </List>
  );
};
