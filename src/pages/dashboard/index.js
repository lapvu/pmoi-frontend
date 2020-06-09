import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import { CardHeader, Grid } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import PersonIcon from "@material-ui/icons/Person";
import ReportIcon from "@material-ui/icons/Report";
export const Dashboard = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem 2rem",
    }}
  >
    <Title title="Thống kê" />
    <Grid container spacing={3}>
      {data.map((e, i) => {
        return (
          <Grid item xs={3} sm={3} key={i}>
            <Card style={{ display: "flex" }}>
              <CardHeader avatar={e.icon} />
              <CardContent style={{ padding: "1rem 0" }}>
                <h3>{e.name}</h3>
                <h5 style={{ marginTop: 1 }}>{e.count}</h5>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  </div>
);

const data = [
  {
    name: "Tài khoản",
    count: 100,
    icon: (
      <PeopleIcon
        style={{ background: "#1abc9c", color: "#fff", padding: "1rem" }}
      />
    ),
  },
  {
    name: "Dự án",
    count: 100,
    icon: (
      <FolderOpenIcon
        style={{ background: "#3498db", color: "#fff", padding: "1rem" }}
      />
    ),
  },
  {
    name: "Chủ đầu tư",
    count: 100,
    icon: (
      <PersonIcon
        style={{ background: "#e67e22", color: "#fff", padding: "1rem" }}
      />
    ),
  },
  {
    name: "Báo cáo",
    count: 100,
    icon: (
      <ReportIcon
        style={{ background: "#e74c3c", color: "#fff", padding: "1rem" }}
      />
    ),
  },
];
