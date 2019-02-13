import * as React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { colors, fontFamilies, fontSizes } from "./constants";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primaryColor,
      contrastText: "white"
    },
    secondary: {
      main: colors.secondaryColor,
      contrastText: "white"
    },
    background: {
      default: "white"
    }
  },
  overrides: {
    MuiTab: {
      root: {
        textTransform: "initial",
        minWidth: "100px !important",
        fontWeight: 400,
        marginLeft: "32px",
        fontFamily: fontFamilies.raleway,
        fontSize: "16px !important",
        "&:hover": {
          color: "#40a9ff",
          opacity: 1
        },
        "&:focus": {
          color: "#40a9ff"
        },
        padding: "12px 16px !important"
      },
      selected: {
        color: "#1890ff !important",
        fontWeight: 500
      },
      labelContainer: {
        padding: "0 !important"
      }
    },
    MuiTabs: {
      root: {
        borderBottom: "1px solid #e8e8e8"
      },
      indicator: {
        backgroundColor: "#1890ff"
      }
    },
    MuiInputBase: {
      input: {
        borderRadius: 2,
        position: "relative",
        backgroundColor: "white",
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "100%",
        height: "38px",
        padding: "4px 12px !important",
        transition: "all .3s",
        borderColor: "1px solid #d9d9d9",
        fontFamily: "inherit",
        "&:focus": {
          borderRadius: 4,
          borderColor: "#80bdff",
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
      },
      root: {
        background: "white !important",
        borderColor: "1px solid #d9d9d9",
        "label + &": {
          marginTop: 24
        }
      },
      inputMarginDense: {
        height: "30px"
      }
    },
    MuiSwitch: {
      switchBase: {
        "&$iOSChecked": {
          color: defaultTheme.palette.common.white,
          "& + $iOSBar": {
            opacity: 1
          }
        },
        transition: defaultTheme.transitions.create("transform", {
          duration: defaultTheme.transitions.duration.shortest,
          easing: defaultTheme.transitions.easing.sharp
        })
      },
      bar: {
        "& + $iOSBar": {
          opacity: 1
        },
        borderRadius: 13,
        width: 42,
        height: 26,
        marginTop: -13,
        marginLeft: -21,
        border: "solid 1px",
        borderColor: defaultTheme.palette.grey[400],
        backgroundColor: defaultTheme.palette.grey[50],
        opacity: 1,
        transition: defaultTheme.transitions.create([
          "background-color",
          "border"
        ])
      },
      iconChecked: {
        boxShadow: defaultTheme.shadows[1]
      },
      checked: {
        transform: "translateX(15px)",
        "& + $iOSBar": {
          opacity: 1,
          border: "none"
        },
      },
      icon: {
        color: "white",
        width: 24,
        height: 24
      }
    }
  },
  typography: {
    headline: {
      fontFamily: fontFamilies.raleway,
      color: colors.primaryNavy,
      fontSize: fontSizes.displayLarge
    },
    display1: {
      fontFamily: fontFamilies.raleway,
      color: colors.primaryNavy,
      fontSize: fontSizes.displayMedium
    },
    display2: {
      fontFamily: fontFamilies.raleway,
      color: colors.primaryNavy,
      fontSize: fontSizes.heading
    },
    display3: {
      fontFamily: fontFamilies.raleway,
      color: colors.primaryNavy,
      fontSize: fontSizes.subHeading
    },
    display4: {
      fontFamily: fontFamilies.raleway,
      color: colors.primaryNavy,
      fontSize: fontSizes.body
    },
    title: {
      fontFamily: fontFamilies.raleway,
      color: colors.secondaryHeading3,
      fontSize: fontSizes.subHeading,
      fontWeight: "bold"
    },
    subtitle1: {
      fontFamily: fontFamilies.raleway,
      color: colors.secondaryHeading2,
      fontSize: fontSizes.body
    },
    subtitle2: {
      fontFamily: fontFamilies.openSans,
      color: colors.secondaryHeading3,
      fontSize: fontSizes.body
    },
    subheading: {
      fontFamily: fontFamilies.raleway,
      color: colors.primaryNavy,
      fontSize: fontSizes.body
    },
    // subheading: {
    //   fontFamily: fontFamilies.openSans,
    //   color: colors.secondaryHeading3,
    //   fontSize: fontSizes.caption2
    // },
    body1: {
      fontFamily: fontFamilies.openSans,
      color: colors.secondaryHeading1,
      fontSize: fontSizes.subHeading
    },
    body2: {
      fontFamily: fontFamilies.openSans,
      color: colors.secondaryHeading1,
      fontSize: fontSizes.caption1
    },
    caption: {
      fontFamily: fontFamilies.openSans,
      color: colors.secondaryHeading1,
      fontSize: fontSizes.caption3
    }
  }
});

export function SpaceCloudTheme(props: any) {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default SpaceCloudTheme;
