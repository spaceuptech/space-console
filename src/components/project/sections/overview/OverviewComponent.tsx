import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import SchoolIcon from "@material-ui/icons/School";

import { colors } from "../../../../styles/constants";
import { Button } from "@material-ui/core";

const overviewImg = require("../../../../images/baasHome.jpg");

const styles = (theme: any) => ({
  root: {
    textAlign: "center" as "center"
  },
  title: {
    ...theme.typography.headline,
    marginTop: theme.spacing.unit * 4
  },
  subTitle: {
    marginTop: theme.spacing.unit * 2
  },
  tutorialsButton: {
    width: theme.spacing.unit * 32,
    marginLeft: theme.spacing.unit * 4,
    borderRadius: "40px",
    boxShadow: "0"
  },
  docsButton: {
    width: theme.spacing.unit * 32,
    borderColor: "#E4E4E4",
    borderRadius: "40px",
    color: colors.primaryNavy,
    boxShadow: "0",
    background: "white"
  },
  extendedIcon: {
    marginLeft: theme.spacing.unit * 2
  },
  buttonsHolder: {
    marginTop: theme.spacing.unit * 4
  },
  img: {
    width: "40%",
    height: "40%"
  }
});
interface Props {
  classes: any;
}

const OverviewComponent: React.SFC<Props> = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Welcome!</Typography>
      <Typography className={classes.subTitle}>
        Building your next app with Space Cloud is extremely simple. We are
        <br />
        here to help you!
      </Typography>
      <div className={classes.buttonsHolder}>
        <Button
          variant="contained"
          color="default"
          aria-label="Add"
          size="large"
          className={classes.docsButton}
        >
          Documentation
          <ImportContactsIcon className={classes.extendedIcon} />
        </Button>
        <Button
          variant="contained"
          aria-label="Add"
          size="large"
          color="secondary"
          disableFocusRipple
          className={classes.tutorialsButton}
        >
          Tutorials
          <SchoolIcon className={classes.extendedIcon} />
        </Button>
      </div>
      <img className={classes.img} src={overviewImg} alt="" />
    </div>
  );
};

export default withStyles(styles)(OverviewComponent);
