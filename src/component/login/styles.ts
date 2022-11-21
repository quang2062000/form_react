import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    width: "600px",
    height: "600px",
    backgroundColor: "white",
    borderRadius: "20px",
  },
  title: {
    fontSize: "50px",
    fontWeight: 600,
    color: "blue",
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "50px",
  },
  input: {
    width: "80%",
    marginBottom: "40px",
    marginLeft: "58px",
  },
  wrapInput: {},
  button: {
    width: "80%",
    height: "60px",
    backgroundColor: "blue",
    marginLeft: "58px",
    color: "white",
    fontSize: "20px",
  },
  wrapCheckPass: {
    display: "flex",
    height: "20px",
    paddingRight: "130px",
  },
  wrapOption: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "50px",
  },
  pass: {
    textDecorationLine: "underline",
    cursor: "pointer",
  },
  loading: {
    top: 0,
    bottom: 0,
    right: 10,
    margin: "auto",
    position: "absolute",
    zIndex: 1,
  },
}));
