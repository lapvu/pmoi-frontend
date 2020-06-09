import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField
} from "react-admin";
import { ListActions, Filters } from "../../components";

export const ReportList = (props) => {
  return (
    <List
      {...props}
      title="Báo cáo"
      actions={<ListActions />}
      filters={<Filters />}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="name" label="Tên" />
        <ReferenceField source="project" reference="project">
+               <TextField source="name" label="Dự án" />
        </ReferenceField>
        <EditButton label="Sửa" />
        <DeleteButton label = "Xóa" />
      </Datagrid>
    </List>
  );
};
