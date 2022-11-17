import React from "react";
import { appRoutesEnum } from "../../enums/routes";
import IconSDrawerSetting, {
  Props as IconProps,
} from "../../assets/icon/sidebar/sidebar-setting";

const routes: {
  path: appRoutesEnum;
  label: string;
  icon: (props: IconProps) => React.ReactElement;
}[] = [
  {
    path: appRoutesEnum.test,
    label: "Menu 1",
    icon: (props: IconProps) => <IconSDrawerSetting {...props} />,
  },
  {
    path: appRoutesEnum.test2,
    label: "Menu 2",
    icon: (props: IconProps) => <IconSDrawerSetting {...props} />,
  },
  {
    path: appRoutesEnum.test3,
    label: "Menu 3",
    icon: (props: IconProps) => <IconSDrawerSetting {...props} />,
  },
];

export default routes;
