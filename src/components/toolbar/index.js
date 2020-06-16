import React from "react";
import { SaveButton, Toolbar, DeleteButton } from "react-admin";

export const EditToolbar = (props) => (
  <Toolbar
    {...props}
    style={{ display: "flex", justifyContent: "space-between" }}
  >
    <SaveButton label="Sửa" undoable={false} submitOnEnter={false} />
    <DeleteButton
      confirmTitle="Bạn có chắc muốn xóa mục này?"
      confirmContent=""
      label="Xóa"
      cancel="Hủy"
      undoable={false}
    />
  </Toolbar>
);
