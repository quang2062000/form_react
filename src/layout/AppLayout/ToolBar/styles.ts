import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
    minHeight: "64px !important",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: -theme.spacing(1),
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  appbarStart: {
    minWidth: "60px",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    cursor: "pointer",
    fontSize: "20px",
  },
  appbarEnd: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  switchVessel: {
    padding: 0,
    boxShadow: "none",
    marginRight: theme.spacing(4),
    backgroundColor: theme.colors.happyGreen,
  },
  userName: {
    color: theme.colors.pureWhite,
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 500,
    textTransform: "capitalize",
    whiteSpace: "nowrap",
    padding: theme.spacing(0, 1),
    backgroundColor: theme.colors.happyGreen,
  },
  logOutButton: {
    padding: 0,
  },
}));
