import React from "react";
import { Show, SimpleShowLayout, TextField, FunctionField } from "react-admin";
import CurrencyFormat from "react-currency-format";
export const ShowResource = (props) => {
  return (
    <Show {...props} title="Xem">
      <SimpleShowLayout>
        <TextField source="name" label="Tên nguồn vốn" />
        <TextField source="shortName" label="Tên rút gọn" />
        <TextField source="time" label="Lần điều chỉnh" />
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
        <TextField source="desc" label="Mô tả" />
      </SimpleShowLayout>
    </Show>
  );
};
