import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
  DeleteButton,
} from "react-admin";
import { Chip } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import FaceIcon from "@material-ui/icons/Face";
import TextTruncate from 'react-text-truncate'; 
import { ListActions } from "../../components";

export const AccountList = (props) => {
  return (
    <List
      {...props}
      title="Tài khoản"
      actions={<ListActions />}
      bulkActionButtons={false}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="username" label="Tên tài khoản" />
        <FunctionField
          label="Tên Chủ đầu tư"
          render={(record) =>
            (
              <TextTruncate
                line={1}
                element="span"
                truncateText="…"
                text={record.investorName}
              />
            ) || null
          }
        />
        <TextField source="email" label="Email" />
        <FunctionField
          label="Loại tài khoản"
          render={(record) =>
            record.accountType === "MINISTRY" ? (
              <Chip
                icon={<InsertEmoticonIcon />}
                label="Bộ"
                color="secondary"
              />
            ) : (
              <Chip
                icon={<FaceIcon style={{ color: "#fff" }} />}
                label="Chủ đầu tư"
                style={{
                  background: "#e74c3c",
                  color: "#fff",
                }}
              />
            )
          }
        />
        <EditButton label="Sửa" />
        <DeleteButton
          confirmTitle="Bạn có chắc muốn xóa tài khoản này này?"
          confirmContent=""
          label="Xóa"
          cancel="Hủy"
          undoable={false}
        />
      </Datagrid>
    </List>
  );
};
