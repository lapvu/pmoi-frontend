import React, { useState, useRef } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import { Button, Paper, CircularProgress } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef("");
  const login = useLogin();
  const notify = useNotify();
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    login({ username, password })
      .then(() => setLoading(false))
      .catch(() => {
        setLoading(false);
        notify("Tên đăng nhập hoặc mật không chính xác!", "error");
      });
  };
  return (
    <div style={{ width: "100%", height: "100vh", background: "#f5f7fb" }}>
      <Paper
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          minWidth: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <ValidatorForm
          ref={ref}
          onSubmit={submit}
          onError={(errors) => console.log(errors)}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <AccountCircle style={{ fontSize: 55 }} />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <TextValidator
              size="small"
              name="username"
              label="Tên đăng nhập"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%" }}
              validators={["required"]}
              errorMessages={["Bạn chưa nhập tên đăng nhập!"]}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <TextValidator
              size="small"
              name="password"
              label="Mật khẩu"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%" }}
              validators={["required"]}
              errorMessages={["Bạn chưa nhập mật khẩu!"]}
            />
          </div>
          <div style={{ position: "relative" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: "100%" }}
              disabled={loading}
            >
              Đăng nhập
            </Button>
            {loading && (
              <CircularProgress
                size={24}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: -12,
                  marginLeft: -12,
                }}
              />
            )}
          </div>
        </ValidatorForm>
      </Paper>
      <Notification />
    </div>
  );
};
