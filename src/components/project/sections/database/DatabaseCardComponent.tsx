import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
    marginTop: theme.spacing.unit * 2
  },
  button: {
    width: "120px",
    borderRadius: "40px",
    padding: "8px 16px !important"
  }
});

interface Prop {
  classes: any;
  dbType: string;
  name: string;
  desc: string;
  isPrimary: boolean;
  isSecondary: boolean;
  imageUrl: string;
  configure: (dbType: any) => void;
  add: (dbType: any) => void;
  remove: (dbType: any) => void;
}

const DatabaseCardComponent: React.SFC<Prop> = props => {
  const {
    classes,
    dbType,
    imageUrl,
    name,
    desc,
    isSecondary,
    isPrimary,
    add,
    remove,
    configure
  } = props;

  const onButtonClick = (e: any) => {
    if (isPrimary) {
      configure(dbType);
      return
    }
    if (isSecondary) {
      remove(dbType);
      return
    }
    add(dbType);
  }
  return (
    <div className={classes.card}>
      <div className={classes.logoWrapper}>
        <img className={classes.img} src={imageUrl} alt="" />
      </div>
      <div className={classes.content}>
        <Typography className={classes.title}>{name}</Typography>
        <Typography className={classes.desc}>{desc}</Typography>
        <div className={classes.buttonHolder}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            onClick={onButtonClick}
          >
            {isPrimary ? "Configure": (isSecondary? "Remove": "Add")}
          </Button>
        </div>
      </div>
    </div>
    // <Card className={classes.card}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       className={classes.media}
    //       // height="140"
    //       image={imageUrl}
    //       title={name}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {name}
    //       </Typography>
    //       <Typography component="p">{desc}</Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     {!isPrimary && !isSecondary && (
    //       <Button size="small" color="primary" onClick={add}>
    //         Add
    //       </Button>
    //     )}
    //     {!isPrimary && isSecondary && (
    //       <Button size="small" color="primary" onClick={remove}>
    //         Remove
    //       </Button>
    //     )}
    //     {(isPrimary || isSecondary) && (
    //       <Button size="small" color="primary" onClick={configure}>
    //         Configure
    //       </Button>
    //     )}
    //   </CardActions>
    // </Card>
  );
};

export default withStyles(styles)(DatabaseCardComponent);
