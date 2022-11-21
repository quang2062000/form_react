import React, { ElementType, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutAction } from "store/actions/loginAction";
import { appRoutesEnum, AuthRuotesEnum } from "../../enums/routes";
import AppBar from "./AppBar";
import ManageDrawer from "./Drawer";
import { styles } from "./styles";
import Toolbar from "./ToolBar";

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
  const [open, setOpen] = useState(true);
  const routeLocation = useLocation();
  const handleOpenDrawer = useCallback(() => {
    setOpen((state) => !state);
  }, []);
  const dispatch = useDispatch();

  const handleNavigate = useCallback(
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

  return (
    <>
      <AppBar>
        <Toolbar openDrawer={handleOpenDrawer} handleLogout={handleLogout} />
      </AppBar>
      <div className={classes.wrapContent}>
        <ManageDrawer
          openDrawer={open}
          onNavigate={handleNavigate}
          path={routeLocation.pathname}
        />
        <div className={classes.wrapContentRight}>
          <div className={classes.contentRight}>
            <RenderComponent />
          </div>
        </div>
      </div>
    </>
  );
}
export default function AppLayout({
  RenderComponent,
  ...rest
}: AppLayoutProps) {
  return <Layout RenderComponent={RenderComponent} path={rest.path} />;
}
