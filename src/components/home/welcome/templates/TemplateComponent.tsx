import * as React from 'react';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { colors } from "../../../../styles/constants"

const styles = (theme: any) => ({
  card: {
    textAlign: "center" as "center"
  },
  title: {
    ...theme.typography.display4,
    marginTop: theme.spacing.unit * 2,
    fontWeight: "bold"
  },
  subTitle: {
    ...theme.typography.body2,
    marginTop: theme.spacing.unit * 0.5
  },
  img: {
    marginTop: theme.spacing.unit * 3,
    width: theme.spacing.unit * 8,
    height: theme.spacing.unit * 8,
  }
});

export interface Template {
  name: string
  desc: string
}

interface TemplateProps extends Template {
  classes: any
}

const TemplateComponent: React.SFC<TemplateProps> = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <img className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sKFHnUwo0cnnc_CCNKTrSEiczdDN5_ER0gg5BHXgK2BIg8Y2" />
          <Typography className={classes.title}>
            {props.name}
          </Typography>
          <Typography className={classes.subTitle}>
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}


export const StyledTemplateComponent = withStyles(styles)(TemplateComponent);