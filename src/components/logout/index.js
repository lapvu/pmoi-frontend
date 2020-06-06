import React from "react";
import { forwardRef } from "react";
import { useLogout, MenuItemLink } from "react-admin";
import ExitIcon from "@material-ui/icons/PowerSettingsNew";

export const LogoutButton = forwardRef((props, ref) => {
  const logout = useLogout();
  const handleClick = () => logout();
  return (
    <MenuItemLink
      primaryText="Thoát"
      to="/"
      leftIcon={<ExitIcon />}
      onClick={handleClick}
      ref={ref}
    />
  );
});
