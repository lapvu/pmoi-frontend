import * as React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { MenuItemLink, UserMenu, getResources } from "react-admin";
import DefaultIcon from "@material-ui/icons/ViewList";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import { useLocation } from "react-router-dom";

export const Menu = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources);
  let location = useLocation();
  return (
    <div>
      <MenuItemLink
        to="/"
        primaryText="Thống kê"
        leftIcon={<DashboardIcon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        style={{
          color:
            location.pathname === "/"
              ? "rgba(0, 0, 0, 0.87)"
              : "rgba(0, 0, 0, 0.54)",
        }}
      />
      {resources.map((resource) => (
        <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={
            (resource.options && resource.options.label) || resource.name
          }
          leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      {isXSmall && logout}
    </div>
  );
};

export const MyUserMenu = (props) => {
  return (
    <UserMenu {...props}>
      <MenuItemLink
        to="/profile"
        primaryText="Hồ sơ"
        leftIcon={<PersonIcon />}
      />
    </UserMenu>
  );
};
