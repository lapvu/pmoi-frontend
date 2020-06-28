import React from "react";
import {
  TextInput,
  Edit,
  SimpleForm,
  required,
  FormDataConsumer,
  number,
} from "react-admin";
import { EditToolbar } from "../../components";

export const ResourceEdit = (props) => {
  return (
    <Edit {...props} title="Sửa">
      <SimpleForm
        warnWhenUnsavedChanges
        toolbar={<EditToolbar />}
        redirect="show"
      >
        <FormDataConsumer>
          {({ formData }) => (
            <>
              <TextInput
                source="name"
                label="Tên nguồn vốn"
                variant="standard"
                fullWidth
                validate={required("Bạn chưa nhập tên nguồn vốn!")}
              />
              <TextInput
                source="shortName"
                variant="standard"
                label="Tên viết tắt"
                fullWidth
              />
              <TextInput
                source="time"
                label="Lần điều chỉnh"
                variant="standard"
                fullWidth
                validate={[required("Bạn chưa có lần điều chỉnh!")]}
              />
              <TextInput
                source="amount"
                label="giá trị"
                variant="standard"
                fullWidth
                validate={[
                  required("Bạn chưa nhập số tiền!"),
                  number("Sai định dạng!"),
                ]}
              />
              <TextInput
                source="desc"
                variant="standard"
                label="Mô tả"
                fullWidth
              />
            </>
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};
