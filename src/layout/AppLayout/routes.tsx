import React from "react";
import { appRoutesEnum } from "../../enums/routes";
import { FaUser, FaGem, FaList } from "react-icons/fa";

const subMenu1Routes: {
  path: appRoutesEnum;
  label: string;
}[] = [
  {
    path: appRoutesEnum.user,
    label: "Sub Menu 1",
  },
  {
    path: appRoutesEnum.test3,
    label: "Sub Menu 2",
  },
  {
    path: appRoutesEnum.test2,
    label: "Sub Menu 3",
  },
];

const subMenu2Routes: {
  path: appRoutesEnum;
  label: string;
}[] = [
  {
    path: appRoutesEnum.user,
    label: "Sub Menu 1",
  },
  {
    path: appRoutesEnum.test2,
    label: "Sub Menu 2",
  },
];

const routes: {
  path: appRoutesEnum;
  label: string;
  icon: React.ReactNode;
  count?: number;
}[] = [
  {
    path: appRoutesEnum.user,
    label: "Menu 1",
    icon: <FaUser />,
    count: subMenu1Routes.length,
  },
  {
    path: appRoutesEnum.test2,
    label: "Menu 2",
    icon: <FaGem />,
    count: subMenu2Routes.length,
  },
  {
    path: appRoutesEnum.test3,
    label: "Menu 3",
    icon: <FaList />,
  },
];

const managerRoutes = {
  routes,
  subMenu1Routes,
  subMenu2Routes,
};
export default managerRoutes;
