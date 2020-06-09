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
  const [accountType, setAccountType] = useState("");
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
              <SelectInput
                source="accountType"
                label="Loại tài khoản"
                variant="standard"
                fullWidth
                choices={[
                  { id: "MINISTRY", name: "Bộ" },
                  { id: "INVESTOR", name: "Chủ đầu tư" },
                ]}
                value={formData.accountType}
                onChange={(e) => setAccountType(e.target.value)}
                validate={required("Bạn cần chọn loại tài khoản!")}
              />
              {(accountType === "INVESTOR" ||
                formData.accountType === "INVESTOR") && (
                <TextInput
                  source="investorName"
                  variant="standard"
                  label={"Tên chủ đầu tư"}
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
              {(accountType === "INVESTOR" ||
                formData.accountType === "INVESTOR") && (
                <TextInput
                  source="desc"
                  variant="standard"
                  label="Mô tả"
                  fullWidth
                />
              )}
              {(accountType === "INVESTOR" ||
                formData.accountType === "INVESTOR") && (
                <TextInput
                  source="website"
                  variant="standard"
                  label="Website"
                  fullWidth
                />
              )}
              {(accountType === "INVESTOR" ||
                formData.accountType === "INVESTOR") && (
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
