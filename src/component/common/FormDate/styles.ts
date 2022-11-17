import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    zIndex: 1,
    cursor: "pointer",
    width: "100%",
  },
  wrapForm: {
    position: "relative",
  },
  button: {
    backgroundColor: "white",
    border: "1px solid #aaa",
    width: "168px",
    height: "32px",
    fontSize: "14px",
    color: "#828282",
    borderRadius: "4px",
    cursor: "pointer",
  },
  wrapRange: {
    position: "absolute",
    top: "60px",
    right: "0px",
    border: "1px solid #aaa",
    zIndex: 1,
  },
  wrapButton: {
    position: "relative",
    marginLeft: "1000px",
  },
  iconClear: {
    position: "absolute",
    right: "4px",
    top: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
