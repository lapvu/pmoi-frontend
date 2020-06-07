import React from "react";
import { SaveButton, Toolbar, DeleteButton } from "react-admin";

export const EditToolbar = (props) => (
  <Toolbar
    {...props}
    style={{ display: "flex", justifyContent: "space-between" }}
  >
    <SaveButton label="Sửa" redirect={false} submitOnEnter={false} />
    <DeleteButton undoable={false} label="Xoá" />
  </Toolbar>
);
