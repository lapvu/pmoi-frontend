import React from "react";
import {
  TextInput,
  Edit,
  SimpleForm,
  required,
  FormDataConsumer,
  number,
  ReferenceInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { EditToolbar } from "../../components";

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

export const DisbursementEdit = (props) => {
  return (
    <Edit {...props} title="Sửa">
      <SimpleForm
        warnWhenUnsavedChanges
        toolbar={<EditToolbar />}
        redirect="list"
        validate={validate}
      >
        <FormDataConsumer>
          {({ formData }) => (
            <>
              <ReferenceInput
                label="Dự án"
                source="projectId"
                reference="project"
                validate={required("Bạn chưa nhập dự án!")}
                fullWidth
                variant="standard"
              >
                <SelectInput
                  optionText="name"
                  optionValue="_id"
                  variant="standard"
                />
              </ReferenceInput>
              <TextInput
                source="time"
                label="Lần điều chỉnh"
                fullWidth
                validate={required("Bạn chưa nhập tên mức đầu tư!")}
                variant="standard"
              />
              <ArrayInput source="value" label="Giải ngân" variant="standard">
                <SimpleFormIterator variant="standard">
                  <TextInput
                    source="name"
                    label="Tên giải ngân"
                    fullWidth
                    validate={required("Bạn chưa nhập tên giải ngân!")}
                    variant="standard"
                  />
                  <TextInput
                    source="amount"
                    label="Số tiền (triệu đồng)"
                    fullWidth
                    validate={[
                      required("Bạn chưa nhập số tiền!"),
                      number("Sai định dạng!"),
                    ]}
                    variant="standard"
                  />
                </SimpleFormIterator>
              </ArrayInput>
            </>
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};
