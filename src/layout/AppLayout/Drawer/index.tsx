import React, { useCallback, useMemo } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaUser, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import managerRoutes from "../routes";
import { appRoutesEnum } from "enums/routes";
export interface Props {
  collapsed?: any;
  toggled?: any;
  handleToggleSidebar?: (value: any) => void;
  handleCollapsedChange?: () => void;
  onNavigate: (path: appRoutesEnum) => void;
}

export default function ManageDrawer(props: Props) {
  const {
    collapsed,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange,
    onNavigate,
  } = props;
  const classes = styles();

  const onHandleNavigate = useCallback(
    (route: appRoutesEnum) => () => {
      onNavigate(route);
    },
    [onNavigate]
  );

  const sidebarHeader = useMemo(() => {
    return (
      <>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: "9px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 15,
                  letterSpacing: "1px",
                }}
              >
                Trang Admin
              </div>
            </MenuItem>
          )}
        </Menu>
      </>
    );
  }, [handleCollapsedChange, collapsed]);

  const subMenu1Routes = useMemo(() => {
    return managerRoutes.subMenu1Routes.map(({ label, path }) => {
      return (
        <>
          <MenuItem onClick={onHandleNavigate(path)}>{label}</MenuItem>
        </>
      );
    });
  }, [onHandleNavigate]);

  const subMenu2Routes = useMemo(() => {
    return managerRoutes.subMenu2Routes.map(({ label, path }) => {
      return (
        <>
          <MenuItem onClick={onHandleNavigate(path)}>{label}</MenuItem>
        </>
      );
    });
  }, [onHandleNavigate]);

  const sidebarContent = useMemo(() => {
    return managerRoutes.routes.map(({ path, icon, label, count }) => {
      return (
        <>
          <Menu iconShape="circle">
            {!count && (
              <MenuItem icon={icon} onClick={onHandleNavigate(path)}>
                {label}
              </MenuItem>
            )}
            {count === managerRoutes.subMenu2Routes.length && (
              <SubMenu title={label} icon={icon}>
                {subMenu2Routes}
              </SubMenu>
            )}
            {count === managerRoutes.subMenu1Routes.length && (
              <SubMenu title={label} icon={icon}>
                {subMenu1Routes}
              </SubMenu>
            )}
          </Menu>
        </>
      );
    });
  }, [onHandleNavigate, subMenu1Routes, subMenu2Routes]);

  const sidebarFooter = useMemo(() => {
    return (
      <>
        <div className="sidebar-btn-wrapper" style={{ padding: "16px" }}>
          <Link
            className="sidebar-btn"
            style={{ cursor: "pointer" }}
            to="/profile"
          >
            <FaUser />
            <span>My Account</span>
          </Link>
        </div>
      </>
    );
  }, []);

  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >
      <SidebarHeader style={{ height: "8%" }}>{sidebarHeader}</SidebarHeader>
      <SidebarContent>{sidebarContent}</SidebarContent>
      <SidebarFooter style={{ textAlign: "center" }}>
        {sidebarFooter}
      </SidebarFooter>
    </ProSidebar>
  );
}
