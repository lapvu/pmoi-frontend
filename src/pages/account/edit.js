import React, { useState } from "react";
import {
  TextInput,
  Edit,
  SimpleForm,
  required,
  email,
  SelectInput,
  NumberInput,
  FormDataConsumer,
} from "react-admin";
import { EditToolbar } from "../../components";

export const AccountEdit = (props) => {
  const [userType, setUserType] = useState("");
  return (
    <Edit {...props} title="Sửa">
      <SimpleForm warnWhenUnsavedChanges toolbar={<EditToolbar />} redirect="show">
        <FormDataConsumer>
          {({ formData }) => (
            <>
              <SelectInput
                source="userType"
                label="Loại tài khoản"
                variant="standard"
                fullWidth
                choices={[
                  { id: "MINISTRY", name: "Bộ" },
                  { id: "INVESTOR", name: "Chủ đầu tư" },
                ]}
                value={formData.userType}
                onChange={(e) => setUserType(e.target.value)}
                validate={required("Bạn cần chọn loại tài khoản!")}
              />
              {(userType || formData.userType) && (
                <TextInput
                  source="displayName"
                  variant="standard"
                  label={
                    (userType === "INVESTOR" || formData.userType) ===
                    "INVESTOR"
                      ? "Tên chủ đầu tư"
                      : "Tên của bộ"
                  }
                  validate={required("Bạn chưa nhập tên!")}
                  fullWidth
                />
              )}
              <TextInput
                source="email"
                label="Email"
                variant="standard"
                fullWidth
                validate={[
                  required("Bạn chưa nhập email!"),
                  email("Email chưa đúng định dạng!"),
                ]}
              />
              <TextInput
                source="address"
                variant="standard"
                label="Địa chỉ"
                fullWidth
              />
              {(userType === "INVESTOR" ||
                formData.userType === "INVESTOR") && (
                <TextInput
                  source="desc"
                  variant="standard"
                  label="Mô tả"
                  fullWidth
                />
              )}
              {(userType === "INVESTOR" ||
                formData.userType === "INVESTOR") && (
                <TextInput
                  source="website"
                  variant="standard"
                  label="Website"
                  fullWidth
                />
              )}
              {(userType === "INVESTOR" ||
                formData.userType === "INVESTOR") && (
                <TextInput
                  source="fax"
                  variant="standard"
                  label="Fax"
                  fullWidth
                />
              )}
              <NumberInput
                source="phoneNumber"
                variant="standard"
                label="Số điện thoại"
                fullWidth
              />
            </>
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};
