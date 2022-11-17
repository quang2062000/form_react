import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  root: {
    width: "500px",
    "& .MuiOutlinedInput-root": {
      height: "30px",
    },
  },
  icon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
}));
