import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import TemplateListContainer from "./templates/TemplateListContainer";

import { colors } from "../../../styles/constants"

const styles = (theme: any) => ({
  card: {
    padding: theme.spacing.unit * 3
  },
  title: theme.typography.display1,
  subTitle: {
    ...theme.typography.body1,
    marginTop: theme.spacing.unit * 2
  },
  resources: theme.typography.display3,
  resourceSection: {
    marginTop: theme.spacing.unit * 4
  },
  link: {
    color: colors.secondaryColor,
    textDecoration: "underline",
    fontSize: "16px",
    marginLeft: theme.spacing.unit * 1
  },
  linkIcon: {
    color: colors.secondaryColor,
    position: "relative" as "relative",
    top: "6px",
    marginLeft: theme.spacing.unit * 2
  }
});

function SimpleCard(props: any) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <Typography className={classes.title}>
              Welcome to Space Cloud!
            </Typography>
            <Typography className={classes.subTitle}>
              Choose from the given starter templates or
              <br />
              create your own projects
            </Typography>
            <p className={classes.resourceSection}>
              <span className={classes.resources}>Resources: </span>
              <Icon className={classes.linkIcon}>import_contacts</Icon><span className={classes.link}>Docs</span>
              <Icon className={classes.linkIcon}>school</Icon><span className={classes.link}>Tutorials</span>
            </p>
          </Grid>
          <Grid xs={1} />
          <Grid item xs={7}>
            <TemplateListContainer />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const WrappedCard = withStyles(styles)(SimpleCard);

interface Props {
}

export default class WelcomeComponent extends React.Component<Props, any> {
  public render() {
    return (
      <div>
        <WrappedCard />
      </div>
    );
  }
}