import { makeStyles } from "@material-ui/core";

export const styles = makeStyles(() => ({
  wrapContent: {
    display: "flex",
  },
  wrapContentRight: {
    overflow: "auto",
    height: "100vh",
    width: "100%",
    backgroundColor: "#999",
  },
  contentRight: {
    width: "93%",
    margin: "0 auto",
    backgroundColor: "white",
    marginTop: "120px",
    marginBottom: "50px",
  },
}));
