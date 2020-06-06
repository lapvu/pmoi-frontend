import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import { CardHeader } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
export const Dashboard = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem 5rem",
    }}
  >
    <Title title="Thống kê" />
    <Card style={{ display: "flex", minWidth: "20rem" }}>
      <CardHeader
        avatar={
          <PeopleIcon
            style={{ background: "red", color: "#fff", padding: "1rem" }}
          />
        }
      />
      <CardContent>
        <h3>Tài khoản</h3>
        <h5>100 </h5>
      </CardContent>
    </Card>
    <Card style={{ display: "flex", minWidth: "20rem" }}>
      <CardHeader avatar={<FolderOpenIcon />} />
      <CardContent>
        <h3>Dự án</h3>
        <h5>100 </h5>
      </CardContent>
    </Card>
    <Card style={{ display: "flex", minWidth: "20rem" }}>
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  </div>
);
