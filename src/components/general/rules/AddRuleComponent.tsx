import * as React from "react";

import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

const styles = (theme: any) => ({
  label: {
    ...theme.typography.display4
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
  }
});

interface Props {
  classes: any;
  open: boolean;
  label: string;
  handleClose: (e: any) => void;
  handleSubmit: (ruleName: string) => void;
}

interface State {
  text: string;
}

class AddRuleComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: any) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.props.handleSubmit(this.state.text);
    this.props.handleClose(e);
  }

  public render() {
    const { classes } = this.props;
    name;
    const { text } = this.state;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth={true}
        TransitionComponent={Transition}
      >
        <DialogTitle
          disableTypography={true}
          className={classes.title}
          id="form-dialog-title"
        >
          {`Add a ${this.props.label.toLowerCase()}.`}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleSubmit}>
            <p className={classes.label}>{`${this.props.label.toUpperCase()} NAME`}</p>
            <InputBase
              required={true}
              onChange={this.handleChange}
              value={text}
              placeholder={`Enter ${this.props.label.toLowerCase()} name.`}
              fullWidth={true}
            />
            <div className={classes.buttonHolder}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                disableFocusRipple
                className={classes.button}
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(AddRuleComponent);
