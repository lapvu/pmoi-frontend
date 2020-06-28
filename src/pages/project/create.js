import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectArrayInput,
  required,
  Toolbar,
  SaveButton,
  number,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { provi } from "../../utils";
export const ProjectCreate = (props) => {
  const [hasChild, setHasChild] = useState(false);
  return (
    <Create {...props}>
      <SimpleForm
        variant="standard"
        warnWhenUnsavedChanges
        toolbar={<ProjectCreateToolbar />}
        redirect="show"
      >
        <TextInput
          source="name"
          fullWidth
          label="Tên dự án"
          validate={required("Bạn chưa nhập tên dự án!")}
        />
        <TextInput
          source="approvedInvestment"
          label="QD duyệt chủ trương đầu tư"
          fullWidth
          validate={required("Bạn chưa nhập trường này!")}
        />
        <DateInput
          source="approvedInvestmentTime"
          label="Ngày phê duyệt chủ trương đầu tư"
          fullWidth
        />
        <TextInput
          source="initInvestment"
          label="QD dự án đầu tư ban đầu"
          fullWidth
          validate={required("Bạn chưa nhập trường này!")}
        />
        <DateInput
          source="initInvestmentTime"
          label="Ngày phê duyệt dự án đầu tư ban đầu"
          fullWidth
        />
        <TextInput
          source="treasuryAddress"
          label="Địa điểm kho bạc"
          fullWidth
          validate={required("Bạn chưa nhập trường này!")}
        />
        <SelectArrayInput
          source="place"
          label="Địa điểm thực hiện"
          optionText="CityName"
          optionValue="CityName"
          choices={provi}
          fullWidth
          validate={required("Bạn chưa nhập địa điểm thực hiện!")}
        />
        <TextInput
          source="totalInvestment"
          label="Tổng mức đầu tư (triệu đồng)"
          fullWidth
          validate={[
            required("Bạn chưa nhập tổng mức đầu tư!"),
            number("Sai định dạng!"),
          ]}
        />
        <DateInput
          source="constructionTime"
          label="Thời gian thi công"
          fullWidth
          validate={required("Bạn chưa nhập thời gian thi công!")}
        />
        <DateInput
          source="completionTime"
          label="Thời gian hoàn thành"
          fullWidth
        />
        <TextInput
          source="managementForm"
          label="Hình thức quản lý dự án"
          fullWidth
        />
        <TextInput source="typeSource" label="Loại nguồn vốn" fullWidth />
        <RichTextInput source="desc" label="Mô tả" />
        <BooleanInput
          label="Có dự án con?"
          source="hasChildProject"
          onChange={(event) => setHasChild(event)}
        />
        {hasChild ? (
          <ArrayInput
            source="childProjects"
            label="Dự án con"
            validate={required("Bạn chưa nhập dự án con!")}
          >
            <SimpleFormIterator>
              <TextInput
                source="name"
                label="Tên dự án con"
                fullWidth
                validate={required("Bạn chưa nhập tên dự án con!")}
              />
              <ReferenceInput
                label="Chủ đầu tư"
                source="investor"
                reference="account"
                validate={required("Bạn chưa nhập chủ đầu tư!")}
                fullWidth
              >
                <SelectInput optionText="displayName" optionValue="_id" />
              </ReferenceInput>
              <TextInput source="desc" label="Mô tả" fullWidth />
            </SimpleFormIterator>
          </ArrayInput>
        ) : (
          <ReferenceInput
            label="Chủ đầu tư"
            source="investor"
            reference="account"
            fullWidth
            validate={required("Bạn chưa nhập chủ đầu tư!")}
          >
            <SelectInput optionText="displayName" optionValue="_id" />
          </ReferenceInput>
        )}
      </SimpleForm>
    </Create>
  );
};

const ProjectCreateToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Lưu" redirect="show" submitOnEnter={false} />
  </Toolbar>
);
