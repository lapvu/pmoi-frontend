import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  SaveButton,
  Toolbar,
  FileInput,
  FileField,
  ReferenceInput,
  SelectInput,
  DateInput,
} from "react-admin";

const PortfolioCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Lưu" redirect={false} submitOnEnter={false} />
  </Toolbar>
);

export const PortfolioEdit = (props) => {
  return (
    <Edit {...props} title="Sửa danh mục">
      <SimpleForm
        variant="standard"
        warnWhenUnsavedChanges
        toolbar={<PortfolioCreateToolbar />}
        redirect="list"
      >
        <TextInput
          source="name"
          label="Tên hạng mục"
          fullWidth
          validate={required("Bạn chưa nhập tên hạng mục!")}
        />
        <TextInput
          source="builder"
          label="Chủ thầu"
          fullWidth
          validate={required("Bạn chưa nhập chủ thầu")}
        />
        <DateInput
          source="winBidTime"
          label="Ngày mở thầu"
          fullWidth
          validate={required("Bạn chưa nhập ngày mở thầu")}
        />
        <TextInput source="desc" label="Mô tả" fullWidth />
        <ReferenceInput
          label="Dự án"
          source="projectId"
          reference="project"
          fullWidth
          validate={required("Bạn chưa nhập dự án!")}
          style={{ display: "none" }}
        >
          <SelectInput optionText="name" optionValue="_id" />
        </ReferenceInput>

        <FileInput
          source="attachment"
          label="Hợp đồng"
          placeholder="Thả một tập tin để tải lên, hoặc bấm vào để chọn nó."
          validate={required("Bạn chưa có hợp đồng!")}
          accept="application/pdf"
          maxSize={1000000}
        >
          <FileField source="attachment" title="title" />
        </FileInput>
      </SimpleForm>
    </Edit>
  );
};
