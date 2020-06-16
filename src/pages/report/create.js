import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  SaveButton,
  Toolbar,
  FileInput,
  FileField,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
const ReportCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Gửi" submitOnEnter={false} redirect={false} />
  </Toolbar>
);

export const ReportCreate = (props) => {
  return (
    <Create
      successMessage="Gửi báo cáo thành công"
      title="Thêm mới báo cáo"
      {...props}
    >
      <SimpleForm
        variant="standard"
        warnWhenUnsavedChanges
        toolbar={<ReportCreateToolbar />}
        redirect={false}
      >
        <TextInput
          source="title"
          label="Tên báo cáo"
          fullWidth
          validate={required("Bạn chưa nhập tên báo cáo!")}
        />
        <RichTextInput
          source="body"
          label="Mô tả"
          validate={required("Bạn chưa nhập tên mô tả!")}
        />
        <ReferenceInput
          label="Dự án"
          source="projectId"
          reference="project"
          fullWidth
          validate={required("Bạn chưa nhập dự án!")}
        >
          <SelectInput optionText="name" optionValue="_id" />
        </ReferenceInput>
        <FileInput
          source="attachment"
          label="File đi kèm"
          placeholder="Thả một tập tin để tải lên, hoặc bấm vào để chọn nó."
          validate={required("Bạn chưa đính kèm file!")}
          accept="application/pdf"
        >
          <FileField source="attachment" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};
