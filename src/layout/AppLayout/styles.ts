import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  wrapSidebar: {
    height: "100%",
  },
  wrapContent: {
    height: "100%",
    width: "100%",
  },
  wrapContentTop: {
    height: "8%",
    backgroundColor: "white",
    position: "relative",
    width: "100%",
    boxShadow: "rgb(145 158 171 / 80%) 2px 4px 4px 2px",
  },
  wrapContentBottom: {
    backgroundColor: "rgba(173, 173, 173, 0.2)",
    overflow: "auto",
    height: "92%",
    width: "100%",
    padding: "50px",
  },
  avatar: {
    width: "60px",
    height: "60px",
    position: "absolute",
    top: "8px",
    right: "10px",
  },
  contentBottom: {
    backgroundColor: "White",
    padding: "50px",
    boxShadow: "rgb(145 158 171 / 80%) 2px 4px 4px 2px",
  },
}));
