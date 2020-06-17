import React, { useState, useEffect } from "react";
import { AppBar } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { Badge, IconButton } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Pusher from "pusher-js";
import { MyUserMenu } from "../menu";
import { httpClient } from "../../../App.js";
export const MyAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);
  const [listNoti, setListNoti] = useState([]);
  const pusher = new Pusher("f6e6b90838dcfbee0d31", {
    cluster: "ap1",
  });

  useEffect(() => {
    let _id = localStorage.getItem("_id");
    let roles = localStorage.getItem("roles");
    let channel = pusher.subscribe(
      roles.includes("INVESTOR") ? _id : "notification"
    );
    channel.bind("push", (data) => {
      setListNoti([data, ...listNoti]);
    });
    httpClient("https://pmoi-api.herokuapp.com/notification", {
      method: "GET",
    })
      .then(({ json }) => {
        setListNoti(json.data);
      })
      .then(() => {
        let c = 0;
        listNoti.forEach((val, i) => {
          if (!val.seen.includes(_id)) {
            c++;
          }
        });
        setNotificationCount(c);
      });
    return () => channel.unbind();
  }, []);

  useEffect(() => {
    let _id = localStorage.getItem("_id");
    if (listNoti.length !== 0) {
      let c = 0;
      listNoti.forEach((val, i) => {
        if (!val.seen.includes(_id)) {
          c++;
        }
      });
      setNotificationCount(c);
    }
  }, [listNoti]);

  const handleClick = (event) => {
    if (notificationCount) {
      let _id = localStorage.getItem("_id");
      httpClient("https://pmoi-api.herokuapp.com/notification", {
        method: "PUT",
      })
        .then(({ json }) => {
          setListNoti(json.data);
        })
        .then(() => {
          let c = 0;
          listNoti.forEach((val, i) => {
            if (!val.seen.includes(_id)) {
              c++;
            }
          });
          setNotificationCount(c);
        });
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppBar {...props} userMenu={<MyUserMenu />}>
      <Typography
        variant="h6"
        color="inherit"
        id="react-admin-title"
        className={classes.title}
      />
      <span className={classes.spacer} />
      <IconButton aria-label="cart" onClick={handleClick}>
        <Badge badgeContent={notificationCount} color="error">
          <NotificationsNoneIcon style={{ color: "#fff" }} />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List component="nav" aria-label="secondary mailbox folders">
          {listNoti.map((e, i) => (
            <ListItem alignItems="flex-start" key={i}>
              <ListItemText
                primary={e.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </Popover>
    </AppBar>
  );
};

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
});
