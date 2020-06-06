import React from "react";
import { Layout } from "react-admin";
import { MyAppBar } from "./appBar";
import { Menu } from "./menu";
export const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} menu={Menu} />
);
