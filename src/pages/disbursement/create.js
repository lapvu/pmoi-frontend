import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  SaveButton,
  Toolbar,
  ReferenceInput,
  SelectInput,
  number,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

const DisbursementCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Thêm" redirect={false} submitOnEnter={false} />
  </Toolbar>
);

const validate = (values) => {
  const errors = {
    value: [],
  };
  if (values.value) {
    for (let i = 0; i < values.value.length - 1; i++) {
      if (
        values.value[i + 1] &&
        values.value[i] &&
        values.value[i + 1].name === values.value[i].name
      ) {
        errors.value[i + 1] = { name: "" };
        errors.value[i + 1].name = "Tên giải ngân đã bị trùng!";
      }
    }
  }
  return errors;
};

export const DisbursementCreate = (props) => {
  return (
    <Create {...props} title="Thêm mới mức đầu tư">
      <SimpleForm
        variant="standard"
        warnWhenUnsavedChanges
        toolbar={<DisbursementCreateToolbar />}
        redirect="list"
        validate={validate}
      >
        <ReferenceInput
          label="Dự án"
          source="projectId"
          reference="project"
          validate={required("Bạn chưa nhập dự án!")}
          fullWidth
        >
          <SelectInput optionText="name" optionValue="_id" />
        </ReferenceInput>
        <TextInput
          source="time"
          label="Lần điều chỉnh"
          fullWidth
          validate={required("Bạn chưa nhập tên mức đầu tư!")}
        />
        <ArrayInput source="value" label="Giải ngân">
          <SimpleFormIterator>
            <TextInput
              source="name"
              label="Tên giải ngân"
              fullWidth
              validate={required("Bạn chưa nhập tên giải ngân!")}
            />
            <TextInput
              source="amount"
              label="Số tiền (triệu đồng)"
              fullWidth
              validate={[
                required("Bạn chưa nhập số tiền!"),
                number("Sai định dạng!"),
              ]}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
