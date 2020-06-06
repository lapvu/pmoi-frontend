import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import crudProvider from "./data-provider";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { authProvider } from "./auth";
import {
  Dashboard,
  ProjectList,
  LoginPage,
  NotFoundPage,
  ProjectCreate,
  ProjectEdit,
  AccountCreate,
  AccountEdit,
  AccountList,
  ShowAccount,
} from "./pages";
import { LogoutButton, MyLayout } from "./components";
import { Route } from "react-router-dom";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = crudProvider("http://localhost:3001", httpClient);
function App() {
  return (
    <Admin
      layout={MyLayout}
      catchAll={NotFoundPage}
      dashboard={Dashboard}
      loginPage={LoginPage}
      logoutButton={LogoutButton}
      authProvider={authProvider}
      dataProvider={dataProvider}
      customRoutes={[<Route key="profile" path="/profile" />]}
    >
      {(permissions) => [
        permissions.includes("ADMIN") ? (
          <Resource
            name="account"
            options={{ label: "Tài khoản" }}
            icon={AccountBoxIcon}
            list={AccountList}
            create={AccountCreate}
            edit={AccountEdit}
            show={ShowAccount}
          />
        ) : null,
        permissions.includes("ADMIN") || permissions.includes("MINISTRY") ? (
          <Resource
            name="project"
            options={{ label: "Dự án" }}
            icon={FolderOpenIcon}
            list={ProjectList}
            create={ProjectCreate}
            edit={ProjectEdit}
          />
        ) : null,
      ]}
    </Admin>
  );
}

export default App;