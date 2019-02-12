import React from "react";
import {Route} from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import SidenavComponent from "./SidenavComponent";
import TopbarComponent from "./topbar/TopbarComponent";
import OverviewComponent from "./sections/overview/OverviewComponent";
import DatabaseContainer from "./sections/database/DatabaseContainer";

const styles = (theme: any) => ({
  root: {
    display: "flex",
    background: "white"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: theme.mixins.toolbar
});

function PermanentDrawerLeft(props: any) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SidenavComponent projectId={props.match.params.projectId} />
      <TopbarComponent unsavedChanges={false}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/projects/:projectId/:env" component={OverviewComponent} />
        <Route exact path="/projects/:projectId/:env/database" component={DatabaseContainer} />
      </main>
    </div>
  );
}

export default withStyles(styles)(PermanentDrawerLeft);
