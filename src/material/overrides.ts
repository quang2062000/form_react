import lightBlue from "@material-ui/core/colors/lightBlue";

const overrides = {
  MuiDialog: {
    paperWidthXl: {
      minWidth: 500,
      padding: 16,
    },
  },
  MuiIconButton: {
    root: {
      cursor: "pointer",
      padding: 0,
      "&:hover": {
        backgroundColor: "none",
      },
    },
  },
  MuiButton: {
    root: {
      cursor: "pointer",
      borderRadius: 16,
      minWidth: 105,
      "&:hover": "none",
    },
  },
  MuiCssBaseline: {
    "@global": {
      "*::-webkit-scrollbar": {
        width: "7px",
        height: "7px",
      },
      "*::-webkit-scrollbar-track": {
        backgroundColor: "#ccc",
        border: "3px solid white",
      },
      "*::-webkit-scrollbar-thumb": {
        background: "#FFFFFF",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow:
          "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)",
      },
    },
  },

  switchHeader: {
    // backgroundColor: 'unset',
    color: "white",
  },
  MuiPaper: {
    root: {
      backgroundColor: "#f5f5f5",
    },
    elevation24: {
      boxShadow: "none",
    },
  },

  // custom time picker
  MuiPickersToolbar: {
    toolbar: {
      backgroundColor: lightBlue.A200,
    },
  },
  MuiPickersCalendarHeader: {
    iconButton: {
      backgroundColor: "white",
    },
  },
  MuiPickerDTTabs: {
    tabs: {
      backgroundColor: lightBlue.A200,
    },
  },
  MuiPickersDay: {
    day: {
      color: lightBlue.A700,
    },
    daySelected: {
      backgroundColor: lightBlue["400"],
    },
    dayDisabled: {
      color: lightBlue["100"],
    },
    current: {
      color: lightBlue["900"],
    },
  },
  MuiPickersModal: {
    dialogRoot: {
      backgroundColor: "white",
    },
  },
  MuiPickersSlideTransition: {
    transitionContainer: {
      "& p": {
        color: "black",
      },
    },
  },
  MuiPickersClock: {
    pin: {
      backgroundColor: "black",
    },
  },
  MuiPickersClockPointer: {
    pointer: {
      backgroundColor: "black",
    },
    thumb: {
      borderColor: "black",
      backgroundColor: "black",
    },
    noPoint: {
      backgroundColor: "black",
    },
  },
  MuiPickersClockNumber: {
    clockNumber: {
      color: "black",
    },
    clockNumberSelected: {
      color: "white",
    },
  },
  //input
  MuiInputBase: {
    root: {},
    input: {
      color: "#828282",
    },
  },
  MuiInputLabel: {
    root: {
      color: "#828282",
    },
  },

  MuiSvgIcon: {
    colorAction: {
      color: "#fff",
    },
  },

  MuiMenu: {
    paper: {
      maxHeight: "200px",
    },
  },
  MuiAutocomplete: {
    paper: {
      backgroundColor: "#fff",
      maxHeight: "200px",
    },
  },

  MuiFormLabel: {
    asterisk: {
      color: "red",
    },
  },

  PrivateSwitchBase: {
    root: { padding: "0px 8px 0px 0px" },
  },
};

export default overrides;
