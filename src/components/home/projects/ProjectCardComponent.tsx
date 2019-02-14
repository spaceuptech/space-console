import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = (theme: any) => ({
  card: {
    minHeight: theme.spacing.unit * 20,
    cursor: "pointer"
  },
  title: theme.typography.display2,
  subTitle: {
    ...theme.typography.body1,
    marginTop: theme.spacing.unit
  },
  link: {
    textDecoration: "none"
  }
});

export interface Project {
  id: string;
  name: string;
}

interface ProjectProp extends Project {
  classes: any;
}

const ProjectCard: React.SFC<ProjectProp> = props => {
  const { classes, id, name } = props;
  return (
    <Link to={`projects/${id}/dev`}
    className={classes.link} >
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{name}</Typography>
          <Typography className={classes.subTitle}>{id}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(ProjectCard);
