import * as React from "react";
import WelcomeComponent from "./welcome/WelcomeComponent";
import TopbarComponent from "./TopbarComponent";
import { withStyles } from "@material-ui/core/styles"
import ProjectsContainer from "./projects/ProjectsContainer";

const styles = (theme: any) => ({
  content: {
    position: "fixed" as "fixed",
    top: "64px",
    left: 0,
    right: 0,
    padding: theme.spacing.unit * 4
  }
})

interface Props {
  classes: any
}

class HomeComponent extends React.Component<Props, any> {
  public render() {
    const { classes } = this.props;

    return (
      <div>
        <TopbarComponent />
        <div className={classes.content}>
          <WelcomeComponent />
          <ProjectsContainer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomeComponent)