import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import { Project } from "./ProjectCardComponent";
import ProjectCard from "./ProjectCardComponent";

const noProjectsImg = require("../../../images/noProjects.jpg");

const styles = (theme: any) => ({
  container: {
    marginTop: theme.spacing.unit * 6
  },
  title: {
    ...theme.typography.title
  },
  button: {
    float: "right" as "right"
  },
  projectSection: {
    marginTop: theme.spacing.unit * 4
  },
  emptyStateSection: {
    textAlign: "center" as "center"
  },
  subTitle1: {
    ...theme.typography.body1,
    fontSize: "14px"
  },
  subTitle2: {
    ...theme.typography.body1,
    fontSize: "14px",
    marginTop: theme.spacing.unit
  }
});

interface Props {
  classes: any;
  projects: Project[];
}

class Projects extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
    this.state = { openModal: false };
  }

  toggleModalVisibility = () => {
    console.log(!this.state.openModal);
    this.setState({ openModal: !this.state.openModal });
  };

  public render() {
    const { classes, projects } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <span className={classes.title}>Your Projects</span>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            size="large"
            onClick={this.toggleModalVisibility}
          >
            <AddIcon />
            Add Project
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.openModal}
            onClose={this.toggleModalVisibility}
          >
            <div style={{position: 'absolute',backgroundColor: "#fff",
    outline: 'none',}}>
              <Typography variant="h6" id="modal-title">
                Text in a modal
            </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            </div>
          </Modal>
        </div>
        <div className={classes.projectSection}>
          {projects.length && (
            <Grid container spacing={32}>
              {projects.map((project, index) => {
                return (
                  <Grid item sm={3} key={index}>
                    <ProjectCard {...project} />
                  </Grid>
                );
              })}
            </Grid>
          )}
          {!projects.length && (
            <div className={classes.emptyStateSection}>
              <img src={noProjectsImg} alt="" />
              <Typography className={classes.subTitle1}>
                You don't have a project yet.
              </Typography>
              <Typography className={classes.subTitle2}>
                No worries, create your own project or choose from the
                <br />
                above starter templates to get started.
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
