import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ArrayField,
  FunctionField,
} from "react-admin";
import CurrencyFormat from "react-currency-format";
import { ListActions } from "../../components";

export const DisbursementList = (props) => {
  return (
    <List
      {...props}
      title="Mức đầu tư"
      actions={<ListActions />}
      bulkActionButtons={false}
    >
      <Datagrid rowClick="show">
        <TextField source="_id" label="id" />
        <TextField source="projectId.name" label="Dự án" />
        <ArrayField source="value" label="Giải ngân">
          <Datagrid>
            <TextField source="name" label="Tên giải ngân" sortable={false} />
            <FunctionField
              label="Giá trị"
              render={(record) => (
                <CurrencyFormat
                  value={record.amount}
                  displayType={"text"}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix={" vnd"}
                />
              )}
            />
          </Datagrid>
        </ArrayField>
        <EditButton label="Sửa" />
        <DeleteButton
          confirmTitle="Bạn có chắc muốn xóa giải ngân này?"
          confirmContent=""
          label="Xóa"
          undoable={false}
        />
      </Datagrid>
    </List>
  );
};
