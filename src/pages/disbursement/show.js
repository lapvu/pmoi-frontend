import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  FunctionField,
  ArrayField,
  Datagrid,
} from "react-admin";
import CurrencyFormat from "react-currency-format";
export const ShowDisbursement = (props) => {
  return (
    <Show {...props} title="Xem">
      <SimpleShowLayout>
        <TextField source="_id" label="id" />
        <TextField source="projectId.name" label="Dự án" />
        <TextField source="time" label="Lần chỉnh sửa" sortable={false} />
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
      </SimpleShowLayout>
    </Show>
  );
};
