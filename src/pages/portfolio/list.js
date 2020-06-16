import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";
import { ListActions } from "../../components";

export const PortfolioList = (props) => {
  return (
    <List
      {...props}
      title="Báo cáo"
      actions={<ListActions />}
      bulkActionButtons={false}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="name" label="Tên hạng mục" />
        <TextField source="builder" label="Người chúng thầu" />
        <TextField source="projectName" label="Dự án" />
        <EditButton label="Sửa" undoable={false} />
        <DeleteButton
          confirmTitle="Bạn có chắc muốn xóa hạng mục này?"
          confirmContent=""
          label="Xóa"
          cancel="Hủy"
          undoable={false}
        />
      </Datagrid>
    </List>
  );
};
