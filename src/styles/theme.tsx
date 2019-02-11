import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { colors, fontFamilies, fontSizes } from "./constants";

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
    },
  }
});


export function SpaceCloudTheme(props: any) {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  );
}

export default SpaceCloudTheme
