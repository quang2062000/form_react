import React from "react";
import {
  ClassKeyOfStyles,
  StyledComponentProps as MUIStyledComponentProps,
} from "@material-ui/styles/withStyles";

export interface ThemeColors {
  navyBlue: React.CSSProperties["color"];
  navyBlue2: React.CSSProperties["color"];
  navyBlue3: React.CSSProperties["color"];
  navyBlue4: React.CSSProperties["color"];
  brightBlue: React.CSSProperties["color"];
  brightBlue2: React.CSSProperties["color"];
  brightBlueOverlay: React.CSSProperties["color"];
  lightBlue: React.CSSProperties["color"];
  fieryRed: React.CSSProperties["color"];
  fieryRed2: React.CSSProperties["color"];
  fieryRed3: React.CSSProperties["color"];
  happyGreen: React.CSSProperties["color"];
  happyGreen2: React.CSSProperties["color"];
  happyGreen3: React.CSSProperties["color"];
  longingOrange: React.CSSProperties["color"];
  longingOrange2: React.CSSProperties["color"];
  longingOrange3: React.CSSProperties["color"];
  alluringPurple: React.CSSProperties["color"];
  alluringPurple2: React.CSSProperties["color"];
  alluringPurple3: React.CSSProperties["color"];
  chicGold: React.CSSProperties["color"];
  chicGold2: React.CSSProperties["color"];
  chicGold3: React.CSSProperties["color"];
  tranquilTeal: React.CSSProperties["color"];
  tranquilTeal2: React.CSSProperties["color"];
  tranquilTeal3: React.CSSProperties["color"];
  darkBlack: React.CSSProperties["color"];
  darkBlackBackDrop: React.CSSProperties["color"];
  gray1: React.CSSProperties["color"];
  gray2: React.CSSProperties["color"];
  gray3: React.CSSProperties["color"];
  gray4: React.CSSProperties["color"];
  pureWhite: React.CSSProperties["color"];
  halfTransparentWhite: React.CSSProperties["color"];
  gold: React.CSSProperties["color"];
  black1: React.CSSProperties["color"];
  black2: React.CSSProperties["color"];
  black3: React.CSSProperties["color"];
  purple1: React.CSSProperties["color"];
  yellow1: React.CSSProperties["color"];
}

export type StyledComponentProps<StylesOrClassKey> = MUIStyledComponentProps<
  ClassKeyOfStyles<StylesOrClassKey>
>;
