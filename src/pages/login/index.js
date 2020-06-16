import React, { useState } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import { Button, TextField, Paper, CircularProgress } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
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
        <form onSubmit={submit} autoComplete="off" style={{ width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <AccountCircle style={{ fontSize: 55 }} />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <TextField
              required
              size="small"
              name="username"
              label="Tên đăng nhập"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <TextField
              required
              size="small"
              name="password"
              label="Mật khẩu"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%" }}
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
        </form>
      </Paper>
      <Notification />
    </div>
  );
};
