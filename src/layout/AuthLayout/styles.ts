import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    backgroundImage:
      "url('https://bigdata-vn.com/wp-content/uploads/2021/10/Background-book-%E2%80%93-Background-sach-dep-an-tuong-va-sang.jpg')",
  },
  login: {
    position: "absolute",
    top: "200px",
    left: "200px",
  },
}));
