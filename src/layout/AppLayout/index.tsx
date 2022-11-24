import { Avatar, Grid } from "@material-ui/core";
import React, { ElementType, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "store/actions/loginAction";
import { appRoutesEnum, AuthRuotesEnum } from "../../enums/routes";
import ManageDrawer from "./Drawer";
import { styles } from "./styles";

export interface RouteProps {
  caseSensitive?: boolean;
  children?: React.ReactNode;
  element?: React.ReactNode | null;
  index?: boolean;
  path?: string;
}

export interface AppLayoutProps extends RouteProps {
  RenderComponent: ElementType;
}
export interface LayoutProps {
  RenderComponent: ElementType;
  path?: any;
}

export function Layout(props: LayoutProps) {
  const { RenderComponent } = props;
  const classes = styles();
  const navigation = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const dispatch = useDispatch();

  const onNavigate = useCallback(
    (route: appRoutesEnum) => {
      navigation(route);
    },
    [navigation]
  );

  const handleAffterLogout = useCallback(() => {
    navigation(AuthRuotesEnum.Login);
  }, [navigation]);

  const handleLogout = useCallback(() => {
    dispatch<any>(logoutAction(handleAffterLogout));
  }, [dispatch, handleAffterLogout]);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value: any) => {
    setToggled(value);
  };

  return (
    <>
      <Grid xs={12} lg={12} className={classes.wrapper}>
        <Grid className={classes.wrapSidebar}>
          <ManageDrawer
            collapsed={collapsed}
            toggled={toggled}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
            onNavigate={onNavigate}
          />
        </Grid>
        <Grid xs={12} lg={12} className={classes.wrapContent}>
          <Grid className={classes.wrapContentTop}>
            <Avatar className={classes.avatar} />
          </Grid>
          <Grid xs={12} lg={12} className={classes.wrapContentBottom}>
            <div className={classes.contentBottom}>
              <RenderComponent />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default function AppLayout({
  RenderComponent,
  ...rest
}: AppLayoutProps) {
  return <Layout RenderComponent={RenderComponent} path={rest.path} />;
}
