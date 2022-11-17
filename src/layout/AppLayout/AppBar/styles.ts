import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    minHeight: "64px",
    boxShadow: "none",
    backgroundColor: theme.colors.happyGreen,
  },
}));
