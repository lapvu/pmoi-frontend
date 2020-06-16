import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField
} from "react-admin";
import { ListActions } from "../../components";

export const InvestmentList = (props) => {
  return (
    <List
      {...props}
      title="Mức đầu tư"
      actions={<ListActions />}
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
