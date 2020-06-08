import React, { useState } from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    SaveButton,
    Toolbar,
} from "react-admin";

const ResourceCreateToolbar = (props) => (
    <Toolbar {...props}>
        <SaveButton label="Thêm" redirect={false} submitOnEnter={false} />
    </Toolbar>
);

export const ResourceCreate = (props) => {
    return (
        <Create {...props} title="Thêm mới nguồn vốn">
            <SimpleForm
                variant="standard"
                warnWhenUnsavedChanges
                toolbar={<ResourceCreateToolbar />}
                redirect="show"
            >
                <TextInput
                    source="name"
                    label="Tên nguồn vốn"
                    fullWidth
                    validate={required("Bạn chưa nhập tên nguồn vốn!")}
                />
                <TextInput
                    source="shortName"
                    label="Tên viết tắt"
                    fullWidth
                />
                <TextInput
                    source="desc"
                    label="Mô tả"
                    fullWidth
                />
            </SimpleForm>
        </Create>
    );
};
