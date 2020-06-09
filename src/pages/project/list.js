import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  ArrayField,
  FunctionField,
} from "react-admin";
import { ListActions, Filters } from "../../components";
export const ProjectList = (props) => {
  return (
    <List
      {...props}
      actions={<ListActions />}
      filters={<Filters />}
      title="Danh sách dự án"
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="Mã dự án" />
        <TextField source="name" label="Tên dự án" />
        <TextField source="investor.investorName" label="Chủ đầu tư" />
        <FunctionField
          label="Địa điểm thực hiện"
          render={(record) => record.place && record.place.join(" ")}
        />
        <NumberField source="totalInvestment" label="Tổng mức đầu tư" />
        <ConditionalArrayField label="Dự án con" />
        <EditButton label="Sửa" />
      </Datagrid>
    </List>
  );
};

const ConditionalArrayField = ({ record, ...rest }) =>
  record && record.childProjects ? (
    <ArrayField
      source="childProjects"
      label="Dự án con"
      record={record}
      {...rest}
    >
      <Datagrid>
        <TextField source="name" label="Tên dự án con" sortable={false} />
        <TextField
          source="investor.displayName"
          label="Chủ đầu tư"
          sortable={false}
        />
      </Datagrid>
    </ArrayField>
  ) : null;
