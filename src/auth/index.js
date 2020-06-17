import axios from "axios";
export const authProvider = {
  login: ({ username, password }) => {
    return axios
      .post("http://localhost/auth/login", {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("roles", JSON.stringify(res.data.roles));
        localStorage.setItem("_id", res.data._id);
        return Promise.resolve();
      })
      .catch((err) => {
        if (err.response.status < 200 || err.response.status >= 300) {
          throw new Error(err.response.statusText);
        }
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("_id");
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      localStorage.removeItem("roles");
      localStorage.removeItem("_id");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    const roles = localStorage.getItem("roles");
    return roles ? Promise.resolve(JSON.parse(roles)) : Promise.reject();
  },
};
