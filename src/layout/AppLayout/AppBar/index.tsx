import React, { PropsWithChildren } from "react";
import { AppBar } from "@material-ui/core";
import { styles } from "./styles";

export interface Props {}

export default function AppBarComponent(props: PropsWithChildren<Props>) {
  const { children } = props;
  const classes = styles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      {children}
    </AppBar>
  );
}
