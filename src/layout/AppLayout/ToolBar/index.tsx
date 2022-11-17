import React, { PropsWithChildren } from "react";
import { IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";
import IconLogOut from "../../../assets/icon/logout";

export interface Props {
  openDrawer: () => void;
}

export default function CvManageToolbar(props: PropsWithChildren<Props>) {
  const { openDrawer } = props;
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <div className={classes.header}>
        <div className={classes.appbarStart}>
          <IconButton
            color="inherit"
            className={classes.menuButton}
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          {/* <img
            className={classes.logo}
            src="https://adina.com.vn/wp-content/uploads/2021/07/logo-IKEA.jpg"
            alt="logo"
          /> */}
          <p className={classes.logo}>logo</p>
        </div>
        <div className={classes.appbarEnd}>
          <div className={classes.switchVessel}>
            <Typography className={classes.userName}>
              <span>Quang</span>
            </Typography>
          </div>
          <Typography>
            <IconButton
              data-testid="logoutButton"
              className={classes.logOutButton}
              color="inherit"
            >
              <IconLogOut />
            </IconButton>
          </Typography>
        </div>
      </div>
    </Toolbar>
  );
}
