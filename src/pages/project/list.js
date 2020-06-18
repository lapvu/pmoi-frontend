import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ArrayField,
  FunctionField,
  DeleteButton,
} from "react-admin";
import CurrencyFormat from "react-currency-format";
import TextTruncate from "react-text-truncate";
import { ListActions } from "../../components";
export const ProjectList = (props) => {
  return (
    <List
      {...props}
      actions={<ListActions />}
      title="Danh sách dự án"
      bulkActionButtons={false}
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="Mã dự án" />
        <FunctionField
          label="Tên dự án"
          sortable={true}
          render={(record) => (
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={record.name}
            />
          )}
        />
        <TextField source="investor.investorName" label="Chủ đầu tư" />
        <FunctionField
          label="Địa điểm thực hiện"
          render={(record) => record.place && record.place.join(" ")}
        />
        <FunctionField
          label="Tổng mức đầu tư"
          render={(record) => (
            <CurrencyFormat
              value={record.totalInvestment}
              displayType={"text"}
              thousandSeparator="."
              decimalSeparator=","
              suffix={" vnd"}
            />
          )}
        />
        <ConditionalArrayField label="Tiểu dự án" />
        <EditButton label="Sửa" />
        <DeleteButton
          confirmTitle="Bạn có chắc muốn xóa mục này?"
          confirmContent=""
          label="Xóa"
          cancel="Hủy"
          undoable={false}
        />
      </Datagrid>
    </List>
  );
};

const ConditionalArrayField = ({ record, ...rest }) =>
  record && record.childProjects ? (
    <ArrayField
      source="childProjects"
      label="Tiểu dự án"
      record={record}
      {...rest}
    >
      <Datagrid>
        <TextField source="name" label="Tên tiểu dự án" sortable={false} />
        <TextField
          source="investor.investorName"
          label="Chủ đầu tư"
          sortable={false}
        />
      </Datagrid>
    </ArrayField>
  ) : null;
