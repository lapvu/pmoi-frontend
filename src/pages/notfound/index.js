import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";

export const NotFoundPage = () => {
  return (
    <Card>
      <Title title="Not Found" />
      <CardContent>
        <h1>404: Không tìm thấy trang yêu cầu</h1>
      </CardContent>
    </Card>
  );
};
