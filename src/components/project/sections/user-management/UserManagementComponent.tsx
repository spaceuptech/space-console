import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = (theme: any) => ({
  root: {
    marginTop: theme.spacing.unit * 4
  },
  container: {
    marginTop: theme.spacing.unit * 4
  },
  title: {
    ...theme.typography.display2
  },
  text: {
    ...theme.typography.display3
  },
  leftSection: {
    display: "flex",
    alignItems: "center"
  },
  img: {
    width: theme.spacing.unit * 2,
    height: theme.spacing.unit * 2
  },
  span: {
    paddingLeft: theme.spacing.unit * 2,
    ...theme.typography.display3
  },
  expansionPane: {
    flexDirection: "column" as "column"
  },
  label: {
    ...theme.typography.display4
  }
});

interface Props {
  classes: any;
  authConfig: any;
  editAuthProvider: (authType: string, key: string, value: any) => void;
}

interface State {
  expanded: string;
}

class UserManagementComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { expanded: "" };
  }

  handleChange(panel: string): any {
    return (event: any, expanded: boolean) => {
      this.setState({
        expanded: expanded ? panel: ""
      });
    };
  }

  public render() {
    const { classes, authConfig, editAuthProvider } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item sm={1} />
          <Grid item sm={10}>
            <Typography className={classes.title}>Sign-in Methods</Typography>
            <div className={classes.container}>
              <ExpansionPanel
                expanded={expanded === "email"}
                onChange={this.handleChange("email")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid className={classes.leftSection} item sm={6}>
                      <img
                        className={classes.img}
                        src="https://image.flaticon.com/icons/svg/59/59965.svg"
                        alt=""
                      />
                      <span className={classes.span}>Basic</span>
                    </Grid>
                    <Grid item sm={6} className={classes.text}>
                      {authConfig.email.enabled ? "Enabled" : "Disabled"}
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPane}>
                  <FormControlLabel
                    control={
                      <Switch
                        disableRipple
                        onChange={(e: any, checked: boolean) => {
                          editAuthProvider("email", "enabled", checked);
                        }}
                        checked={authConfig.email.enabled}
                      />
                    }
                    label=""
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "google"}
                onChange={this.handleChange("google")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid className={classes.leftSection} item sm={6}>
                      <img
                        className={classes.img}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png"
                        alt=""
                      />
                      <span className={classes.span}>Google</span>
                    </Grid>
                    <Grid item sm={6} className={classes.text}>
                      {authConfig.google.enabled ? "Enabled" : "Disabled"}
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPane}>            
                  <FormControlLabel
                    control={
                      <Switch
                        disableRipple
                        onChange={(e: any, checked: boolean) => {
                          editAuthProvider("google", "enabled", checked);
                        }}
                        checked={authConfig.google.enabled}
                      />
                    }
                    label=""
                  />
                  <p className={classes.label}>HOST</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("google", "host", e.target.value);
                    }}
                    value={authConfig.google.host}
                    disabled={!authConfig.google.enabled}
                  />
                  <p className={classes.label}>CLIENT ID</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("google", "id", e.target.value);
                    }}
                    value={authConfig.google.id}
                    disabled={!authConfig.google.enabled}
                  />
                  <p className={classes.label}>SECRET</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("google", "secret", e.target.value);
                    }}
                    value={authConfig.google.secret}
                    disabled={!authConfig.google.enabled}
                  />
                  <p className={classes.label}>REDIRECT</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("google", "redirect", e.target.value);
                    }}
                    value={authConfig.google.redirect}
                    disabled={!authConfig.facebook.enabled}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "facebook"}
                onChange={this.handleChange("facebook")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid className={classes.leftSection} item sm={6}>
                      <img
                        className={classes.img}
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                        alt=""
                      />
                      <span className={classes.span}>Facebook</span>
                    </Grid>
                    <Grid item sm={6} className={classes.text}>
                      {authConfig.facebook.enabled ? "Enabled" : "Disabled"}
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPane}>
                  <FormControlLabel
                    control={
                      <Switch
                        disableRipple
                        onChange={(e: any, checked: boolean) => {
                          editAuthProvider("facebook", "enabled", checked);
                        }}
                        checked={authConfig.facebook.enabled}
                      />
                    }
                    label=""
                  />
                  <p className={classes.label}>HOST</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("facebook", "host", e.target.value);
                    }}
                    value={authConfig.facebook.host}
                    disabled={!authConfig.facebook.enabled}
                  />
                  <p className={classes.label}>CLIENT ID</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("facebook", "id", e.target.value);
                    }}
                    value={authConfig.facebook.id}
                    disabled={!authConfig.facebook.enabled}
                  />
                  <p className={classes.label}>SECRET</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("facebook", "secret", e.target.value);
                    }}
                    value={authConfig.facebook.secret}
                    disabled={!authConfig.facebook.enabled}
                  />
                  <p className={classes.label}>REDIRECT</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("facebook", "redirect", e.target.value);
                    }}
                    value={authConfig.facebook.redirect}
                    disabled={!authConfig.facebook.enabled}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "twitter"}
                onChange={this.handleChange("twitter")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid className={classes.leftSection} item sm={6}>
                      <img
                        className={classes.img}
                        src="https://upload.wikimedia.org/wikipedia/de/thumb/9/9f/Twitter_bird_logo_2012.svg/450px-Twitter_bird_logo_2012.svg.png"
                        alt=""
                      />
                      <span className={classes.span}>Twitter</span>
                    </Grid>
                    <Grid item sm={6} className={classes.text}>
                      {authConfig.twitter.enabled ? "Enabled" : "Disabled"}
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPane}>
                  <FormControlLabel
                    control={
                      <Switch
                        disableRipple
                        onChange={(e: any, checked: boolean) => {
                          editAuthProvider("twitter", "enabled", checked);
                        }}
                        checked={authConfig.twitter.enabled}
                      />
                    }
                    label=""
                  />
                  <p className={classes.label}>HOST</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("twitter", "host", e.target.value);
                    }}
                    value={authConfig.twitter.host}
                    disabled={!authConfig.twitter.enabled}
                  />
                  <p className={classes.label}>CLIENT KEY</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("twitter", "id", e.target.value);
                    }}
                    value={authConfig.twitter.id}
                    disabled={!authConfig.twitter.enabled}
                  />
                  <p className={classes.label}>SECRET</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("twitter", "secret", e.target.value);
                    }}
                    value={authConfig.twitter.secret}
                    disabled={!authConfig.twitter.enabled}
                  />
                  <p className={classes.label}>REDIRECT</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("twitter", "redirect", e.target.value);
                    }}
                    value={authConfig.twitter.redirect}
                    disabled={!authConfig.twitter.enabled}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                expanded={expanded === "github"}
                onChange={this.handleChange("github")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid className={classes.leftSection} item sm={6}>
                      <img
                        className={classes.img}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png"
                        alt=""
                      />
                      <span className={classes.span}>Github</span>
                    </Grid>
                    <Grid item sm={6} className={classes.text}>
                      {authConfig.github.enabled ? "Enabled" : "Disabled"}
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPane}>
                  <FormControlLabel
                    control={
                      <Switch
                        disableRipple
                        onChange={(e: any, checked: boolean) => {
                          editAuthProvider("github", "enabled", checked);
                        }}
                        checked={authConfig.github.enabled}
                      />
                    }
                    label=""
                  />
                  <p className={classes.label}>HOST</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("github", "host", e.target.value);
                    }}
                    value={authConfig.github.host}
                    disabled={!authConfig.github.enabled}
                  />
                  <p className={classes.label}>CLIENT ID</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("github", "id", e.target.value);
                    }}
                    value={authConfig.github.id}
                    disabled={!authConfig.github.enabled}
                  />
                  <p className={classes.label}>SECRET</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("github", "secret", e.target.value);
                    }}
                    value={authConfig.github.secret}
                    disabled={!authConfig.github.enabled}
                  />
                  <p className={classes.label}>REDIRECT</p>
                  <InputBase
                    required={true}
                    margin="dense"
                    onChange={(e: any) => {
                      editAuthProvider("github", "redirect", e.target.value);
                    }}
                    value={authConfig.github.redirect}
                    disabled={!authConfig.github.enabled}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(UserManagementComponent);
