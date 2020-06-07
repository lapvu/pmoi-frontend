import React from "react";
import {
  SimpleForm,
  TextInput,
  Edit,
} from "react-admin";

export const ProjectEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
      </SimpleForm>
    </Edit>
  );
  