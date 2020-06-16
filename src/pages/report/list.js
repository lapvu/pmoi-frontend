import React from "react";
import { List, Datagrid, TextField, DeleteButton } from "react-admin";
import { ListActions } from "../../components";

export const ReportList = (props) => {
  return (
    <List
      {...props}
      title="Báo cáo"
      actions={<ListActions />}
      bulkActionButtons={false}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="title" label="Tên" />
        <TextField source="projectName" label="Dự án" />
        <DeleteButton
          confirmTitle="Bạn có chắc muốn xóa báo cáo này?"
          confirmContent=""
          label="Xóa"
          cancel="Hủy"
          undoable={false}
        />
      </Datagrid>
    </List>
  );
};
