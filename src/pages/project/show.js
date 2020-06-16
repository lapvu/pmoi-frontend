import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  FunctionField,
  RichTextField,
  DateField,
  Labeled,
  ArrayField,
  Datagrid,
} from "react-admin";
import CurrencyFormat from "react-currency-format";
export const ShowProject = (props) => {
  return (
    <Show {...props} title="Xem dự án">
      <SimpleShowLayout>
        <TextField source="id" label="Mã dự án" />
        <TextField source="name" label="Tên dự án" />
        <TextField source="investor.investorName" label="Chủ đầu tư" />
        <TextField
          source="approvedInvestment"
          label="QD duyệt chủ trương đầu tư"
        />
        <DateField
          source="approvedInvestmentTime"
          label="Ngày phê duyệt chủ trương đầu tư"
        />
        <TextField source="initInvestment" label="QD dự án đầu tư ban đầu" />
        <DateField
          source="initInvestmentTime"
          label="Ngày phê duyệt dự án đầu tư ban đầu"
        />
        <TextField source="treasuryAddress" label="Địa điểm kho bạc" />
        <FunctionField
          label="Tổng mức đầu tư (triệu đồng)"
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
        <DateField source="constructionTime" label="Thời gian thi công" />
        <DateField source="completionTime" label="Thời gian hoàn thành" />
        <TextField source="managementForm" label="Hình thức quản lý dự án" />
        <TextField source="typeSource" label="Loại nguồn vốn" />
        <RichTextField source="desc" label="Mô tả" />
        <FunctionField
          label="Địa điểm thực hiện"
          render={(record) => {
            return record.place.join(" ");
          }}
        />
        <ConditionalArrayField />
      </SimpleShowLayout>
    </Show>
  );
};

const ConditionalArrayField = ({ record, ...rest }) =>
  record && record.childProjects ? (
    <Labeled label="Tiểu dự án">
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
          <TextField source="desc" label="Mô tả" sortable={false} />
        </Datagrid>
      </ArrayField>
    </Labeled>
  ) : null;
