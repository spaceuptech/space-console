import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LaptopIcon from "@material-ui/icons/Laptop";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

import { colors } from "../../../styles/constants";

const drawerWidth = 240;

const topbarStyles = (theme: any) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: "white"
  },
  toolbar: theme.mixins.toolbar,
  grow: {
    flexGrow: 1
  },
  menuItem: {
    display: "flex",
    height: "auto",
    alignItems: "start"
  },
  resourcesButton: {
    ...theme.typography.subtitle2,
    cursor: "pointer",
    display: "flex",
    fontSize: "16px"
  },
  menuItemIconHolder: {
    color: colors.buttonPrimary1
  },
  menuItemTextHolder: {
    paddingLeft: theme.spacing.unit * 2
  },
  menuItemTitle: {
    ...theme.typography.display4,
    color: "black"
  },
  menuItemSubTitle: {
    ...theme.typography.body2,
    marginTop: theme.spacing.unit * 0.5
  }
});

interface TopbarProps {
  classes: any;
  unsavedChanges: boolean;
}

export interface TopbarState {
  deployMenuOpened: boolean;
  resourcesMenuOpened: boolean;
}

class TopbarComponent extends React.Component<TopbarProps, TopbarState> {
  constructor(props: TopbarProps) {
    super(props);

    this.state = {
      deployMenuOpened: false,
      resourcesMenuOpened: false
    };

    this.handleToggleResourcesMenu = this.handleToggleResourcesMenu.bind(this);
    this.handleCloseResourcesMenu = this.handleCloseResourcesMenu.bind(this);
    this.handleToggleDeployMenu = this.handleToggleDeployMenu.bind(this);
    this.handleCloseDeployMenu = this.handleCloseDeployMenu.bind(this);
  }

  private anchorElResources: HTMLElement = document.createElement("div");
  private anchorElDeploy: HTMLElement = document.createElement("div");

  handleToggleResourcesMenu() {
    this.setState(state => ({
      resourcesMenuOpened: !state.resourcesMenuOpened
    }));
  }

  handleCloseResourcesMenu(event: any) {
    if (this.anchorElResources.contains(event.target)) {
      return;
    }

    this.setState({ resourcesMenuOpened: false });
  }

  handleToggleDeployMenu() {
    this.setState(state => ({
      deployMenuOpened: !state.deployMenuOpened
    }));
  }

  handleCloseDeployMenu(event: any) {
    if (this.anchorElDeploy.contains(event.target)) {
      return;
    }

    this.setState({ deployMenuOpened: false });
  }

  public render() {
    const { classes, unsavedChanges } = this.props;
    const { deployMenuOpened, resourcesMenuOpened } = this.state;
    return (
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {/* Permanent drawer */}
          </Typography>
          <div className={classes.grow} />
          <div
            className={classes.resourcesButton}
            onClick={this.handleToggleResourcesMenu}
            ref={(node: any) => {
              this.anchorElResources = node;
            }}
          >
            Resources <ExpandMoreIcon />
          </div>
          <Button
            variant="contained"
            className={classes.button}
            color={unsavedChanges ? "primary" : "default"}
            size="medium"
            style={{ marginLeft: "16px" }}
            disabled={unsavedChanges ? false : true}
          >
            {unsavedChanges ? "Save" : "All changes saved"}
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            size="medium"
            buttonRef={node => {
              this.anchorElDeploy = node;
            }}
            style={{ marginLeft: "16px" }}
            onClick={this.handleToggleDeployMenu}
          >
            Deploy
            <ArrowDropDownIcon />
          </Button>
          <Popper
            open={deployMenuOpened}
            anchorEl={this.anchorElDeploy}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleCloseDeployMenu}>
                    <MenuList className={classes.menuItemList}>
                      <MenuItem className={classes.menuItem}>
                        <div className={classes.menuItemIconHolder}>
                          <LaptopIcon />
                        </div>
                        <div className={classes.menuItemTextHolder}>
                          <Typography className={classes.menuItemTitle}>
                            On Laptop
                          </Typography>
                          <Typography className={classes.menuItemSubTitle}>
                            Choose this option and hold back. Everythng
                            <br />
                            will be magically depployed.
                          </Typography>
                        </div>
                      </MenuItem>
                      <MenuItem className={classes.menuItem}>
                        <div className={classes.menuItemIconHolder}>
                          <CloudQueueIcon />
                        </div>
                        <div className={classes.menuItemTextHolder}>
                          <Typography className={classes.menuItemTitle}>
                            Cloud
                          </Typography>
                          <Typography className={classes.menuItemSubTitle}>
                            Choose this option to deploy your project
                            <br />
                            on remote servers.
                          </Typography>
                        </div>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Popper
            open={resourcesMenuOpened}
            anchorEl={this.anchorElResources}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener
                    onClickAway={this.handleCloseResourcesMenu}
                  >
                    <MenuList className={classes.menuItemList}>
                      <MenuItem>Documentation</MenuItem>
                      <MenuItem>Tutorials</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(topbarStyles)(TopbarComponent);
