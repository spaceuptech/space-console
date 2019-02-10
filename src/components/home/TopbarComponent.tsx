import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "white"
  },
  logo: {
    width: "10%",
    height: "auto"
  }
});

const TopbarComponent: React.SFC<any> = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" color="default">
        <Toolbar>
          <img className={classes.logo} src="https://spaceuptech.com/icons/logo.png" alt="" />
        </Toolbar>
      </AppBar>
    </div>
  );
};


export default withStyles(styles)(TopbarComponent);
