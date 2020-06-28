import React, { useState } from "react";
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
    SelectInput
} from "react-admin";

const ReportCreateToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton label="Gửi" redirect={false} submitOnEnter={false} />
    </Toolbar>
);

export const ReportCreate = (props) => {
    return (
        <Create {...props} title="Thêm mới báo cáo">
            <SimpleForm
                variant="standard"
                warnWhenUnsavedChanges
                toolbar={<ReportCreateToolbar />}
                redirect="show"
            >
                <TextInput
                    source="name"
                    label="Tên báo cáo"
                    fullWidth
                    validate={required("Bạn chưa nhập tên báo cáo!")}
                />

                <ReferenceInput label="Dự án" source="project" reference="project" validate={required("Bạn chưa nhập dự án!")}>
                    <SelectInput optionText="name" optionValue="_id" />
                </ReferenceInput>

                <FileInput source="attachment " label="File đi kèm" validate={required("Bạn chưa đính kèm file!")} >
                    <FileField source="attachment" title="title" />
                </FileInput>



            </SimpleForm>
        </Create>
    );
};
