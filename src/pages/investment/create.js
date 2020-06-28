import React, { useState } from "react";
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
    DateInput,
} from "react-admin";

const InvestmentCreateToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton label="Lưu" redirect={false} submitOnEnter={false} />
    </Toolbar>
);

export const InvestmentCreate = (props) => {
    return (
        <Create {...props} title="Thêm mới mức đầu tư">
            <SimpleForm
                variant="standard"
                warnWhenUnsavedChanges
                toolbar={<InvestmentCreateToolbar />}
                redirect="show"
            >
                <TextInput
                    source="name"
                    label="Tên mức đầu tư"
                    fullWidth
                    validate={required("Bạn chưa nhập tên mức đầu tư!")}
                />

                <SelectInput
                    source="type"
                    label="Loại mức đầu tư"
                    fullWidth
                    choices={[
                        { id: "0", name: "Loại 1" },
                        { id: "1", name: "Loại 2" },
                    ]}
                    validate={required("Bạn cần chọn loại tài khoản!")}
                />

                <TextInput
                    source="value"
                    label="Giá trị (triệu đồng)"
                    fullWidth
                    validate={[
                        required("Bạn chưa nhập giá trị!"),
                        number("Sai định dạng!"),
                    ]}
                />

                <ReferenceInput label="Dự án" source="project" reference="project" validate={required("Bạn chưa nhập dự án!")}>
                    <SelectInput optionText="name" optionValue="_id" />
                </ReferenceInput>

                <DateInput
                    source="modifiedTime"
                    label="Thời gian thay đổi"
                    fullWidth
                    validate={required("Bạn chưa nhập thời gian thay đổi!")}
                />

            </SimpleForm>
        </Create>
    );
};
