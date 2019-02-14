import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme: any) => ({
  card: {
    boxShadow: "0 -1px 1px 0 rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.2)"
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: theme.spacing.unit * 20,
    borderBottom: "1px solid #eee"
  },
  img: {
    width: theme.spacing.unit * 12,
    height: theme.spacing.unit * 12
  },
  content: {
    padding: theme.spacing.unit * 2
  },
  title: {
    ...theme.typography.display3
  },
  desc: {
    ...theme.typography.body1,
    marginTop: theme.spacing.unit,
    height: "96px"
  },
  buttonHolder: {
    textAlign: "center" as "center",
    marginTop: theme.spacing.unit * 2,
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    width: "120px",
    borderRadius: "40px",
    padding: "8px 16px !important"
  }
});

interface Prop {
  classes: any;
  storeType: string;
  name: string;
  desc: string;
  isEnabled: boolean;
  imageUrl: string;
  configure: () => void;
  enable: (storeType: any) => void;
}

const DatabaseCardComponent: React.SFC<Prop> = props => {
  const {
    classes,
    storeType,
    imageUrl,
    name,
    desc,
    isEnabled,
    enable,
    configure
  } = props;
  
  return (
    <div className={classes.card}>
      <div className={classes.logoWrapper}>
        <img className={classes.img} src={imageUrl} alt="" />
      </div>
      <div className={classes.content}>
        <Typography className={classes.title}>{name}</Typography>
        <Typography className={classes.desc}>{desc}</Typography>
        <div className={classes.buttonHolder}>
          {(isEnabled) && (
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              className={classes.button}
              onClick={(e: any) => configure()}
            >
              Configure
            </Button>
          )}
          {!isEnabled && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              onClick={(e: any) => enable(storeType)}
            >
             Enable
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(DatabaseCardComponent);
