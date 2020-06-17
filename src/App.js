import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountBalance from "@material-ui/icons/AccountBalance";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import CategoryIcon from "@material-ui/icons/Category";
import CreditCard from "@material-ui/icons/CreditCard";
import Assessment from "@material-ui/icons/Assessment";
import vietnameseMessages from "ra-language-vietnamese";
import polyglotI18nProvider from "ra-i18n-polyglot";

import { authProvider } from "./auth";
import jsonServerProvider from "./data-provider";
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
  ShowProject,
  ResourceList,
  ShowResource,
  ResourceCreate,
  ResourceEdit,
  InvestorCreate,
  InvestorEdit,
  InvestorList,
  ShowInvestor,
  ReportList,
  ReportCreate,
  ShowReport,
  InvestmentList,
  InvestmentCreate,
  PortfolioList,
  PortfolioCreate,
  ShowPortfolio,
  ProjectListForInvestor,
  PortfolioEdit,
} from "./pages";
import { LogoutButton, MyLayout } from "./components";
import { Route } from "react-router-dom";

export const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("http://localhost", httpClient);

const i18nProvider = polyglotI18nProvider((locale) =>
  locale === "en" ? vietnameseMessages : null
);

function App() {
  return (
    <Admin
      locale="vi"
      i18nProvider={i18nProvider}
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
        <Resource
          name="project"
          options={{ label: "Dự án" }}
          icon={FolderOpenIcon}
          list={
            permissions.includes("INVESTOR")
              ? ProjectListForInvestor
              : ProjectList
          }
          create={permissions.includes("INVESTOR") ? null : ProjectCreate}
          edit={permissions.includes("INVESTOR") ? null : ProjectEdit}
          show={ShowProject}
        />,
        permissions.includes("MINISTRY") ? (
          <Resource
            name="investor"
            options={{ label: "Chủ đầu tư" }}
            icon={AccountBoxIcon}
            list={InvestorList}
            create={InvestorCreate}
            edit={InvestorEdit}
            show={ShowInvestor}
          />
        ) : null,
        <Resource
          name="investment"
          options={{ label: "Mức đầu tư" }}
          icon={CreditCard}
          list={InvestmentList}
          create={InvestmentCreate}
          // edit={ResourceEdit}
          // show={ShowResource}
        />,
        <Resource
          name="report"
          options={{ label: "Báo cáo" }}
          icon={Assessment}
          list={ReportList}
          create={permissions.includes("INVESTOR") ? ReportCreate : null}
          show={ShowReport}
        />,
        permissions.includes("ADMIN") ? (
          <Resource
            name="resources"
            options={{ label: "Nguồn vốn" }}
            icon={AccountBalance}
            list={ResourceList}
            create={ResourceCreate}
            edit={ResourceEdit}
            show={ShowResource}
          />
        ) : null,
        permissions.includes("INVESTOR") ? (
          <Resource
            name="portfolio"
            options={{ label: "Hạng mục đầu tư" }}
            icon={CategoryIcon}
            list={PortfolioList}
            create={PortfolioCreate}
            edit={PortfolioEdit}
            show={ShowPortfolio}
          />
        ) : null,
      ]}
    </Admin>
  );
}

export default App;
