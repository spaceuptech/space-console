import * as React from "react";

import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

const styles = (theme: any) => ({
  label: {
    ...theme.typography.display4
  },
  form: {
    marginTop: theme.spacing.unit * 4
  },
  title: {
    textAlign: "center" as "center",
    ...theme.typography.display2
  },
  buttonHolder: {
    marginTop: theme.spacing.unit * 4,
    textAlign: "center" as "center"
  },
  button: {
    width: theme.spacing.unit * 32,
    borderRadius: "40px",
    boxShadow: "0"
  },
  menuItemImg: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  menuItemText: {
    marginLeft: theme.spacing.unit
  },
  subTitle: {
    ...theme.typography.body1,
    textAlign: "center",
    fontSize: "16px"
  }
});

const SpaceUpInput = withStyles(theme => theme)(InputBase);

interface Props {
  classes: any;
  open: boolean;
  handleClose: (e: any) => void;
  createProject: (projectName: string, primaryDb: string) => void;
}

interface State {
  projectName: string;
  primaryDb: string;
}

class AddRuleComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      projectName: "",
      primaryDb: "mongo"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: any) {
    const name: string = e.target.name;
    const value: string = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.props.createProject(this.state.projectName, this.state.primaryDb);
    this.props.handleClose(e);
  }

  public render() {
    const { classes, open } = this.props;
    const { projectName, primaryDb } = this.state;
    return (
      <Dialog
        open={open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogTitle
          disableTypography={true}
          className={classes.title}
          id="form-dialog-title"
        >
          Configure your project
        </DialogTitle>
        <DialogContent>
          <Typography className={classes.subTitle}>
            Just choose a Project name and a Primary database,
            <br />
            and you are good to go!
          </Typography>
          <form onSubmit={this.handleSubmit} className={classes.form}>
            <p className={classes.label}>PROJECT NAME</p>
            <InputBase
              required={true}
              onChange={this.handleChange}
              value={projectName}
              placeholder="Enter the name of project"
              fullWidth={true}
              name="projectName"
            />
            <p className={classes.label}>PRIMARY DATABASE</p>
            <Select
              value={primaryDb}
              onChange={this.handleChange}
              fullWidth={true}
              placeholder="Select database"
              input={<SpaceUpInput name="age" id="age-customized-select" />}
              className={classes.select}
              name="primaryDb"
              required={true}
            >
              <MenuItem value="mongo">
                <img
                  className={classes.menuItemImg}
                  src="https://spaceuptech.com/icons/mongodb.svg"
                  alt=""
                />
                <span className={classes.menuItemText}>Mongo DB</span>
              </MenuItem>
              <MenuItem value="sql-mysql">
                <img
                  className={classes.menuItemImg}
                  src="https://spaceuptech.com/icons/mysql.svg"
                  alt=""
                />
                <span className={classes.menuItemText}>MySql</span>
              </MenuItem>
              <MenuItem value="sql-postgres">
                <img
                  className={classes.menuItemImg}
                  src="https://spaceuptech.com/icons/postgres.svg"
                  alt=""
                />
                <span className={classes.menuItemText}>Postgres</span>
              </MenuItem>
            </Select>
            <div className={classes.buttonHolder}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                disableFocusRipple
                className={classes.button}
                type="submit"
              >
                Create
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(AddRuleComponent);
