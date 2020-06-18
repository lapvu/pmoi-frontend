import React from "react";
import { List, Datagrid, FunctionField } from "react-admin";
import CurrencyFormat from "react-currency-format";
import TextTruncate from "react-text-truncate";
export const ProjectListForInvestor = (props) => {
  return (
    <List {...props} title="Danh sách dự án" bulkActionButtons={false}>
      <Datagrid rowClick="show">
        <FunctionField
          label="id"
          render={(record) =>
            record.hasChildProject ? "Tiểu dự án" : record.id
          }
        />
        <FunctionField
          label="Tên"
          render={(record) => (
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={
                record.hasChildProject ? record.childProjects.name : record.name
              }
            />
          )}
        />
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
      </Datagrid>
    </List>
  );
};
