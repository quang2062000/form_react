import React, { ElementType } from "react";
import { Grid } from "@material-ui/core";
import { RouteProps } from "layout/AppLayout";
import { useStyles } from "./styles";

interface AuthLayoutProps extends RouteProps {
  RenderComponent: ElementType;
}

export interface LayoutProps {
  RenderComponent: ElementType;
  path?: any;
}

function Layout(props: LayoutProps) {
  const classes = useStyles();
  const { RenderComponent } = props;

  return (
    <Grid className={classes.root}>
      <Grid className={classes.login}>
        <RenderComponent />
      </Grid>
    </Grid>
  );
}

export default function AuthLayout({
  RenderComponent,
  ...rest
}: AuthLayoutProps) {
  return <Layout RenderComponent={RenderComponent} path={rest.path} />;
}
