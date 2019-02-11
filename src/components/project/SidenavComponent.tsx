import * as React from "react";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import GroupIcon from "@material-ui/icons/Group";
import DnsIcon from "@material-ui/icons/Dns";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import CodeIcon from "@material-ui/icons/Code";
import SettingsIcon from "@material-ui/icons/Settings";

import { colors } from "../../styles/constants";

const drawerWidth: number = 240;

const styles = (theme: any) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: {
    height: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 2
  },
  logo: {
    width: "70%",
    height: "auto"
  },
  listItemText: {
    ...theme.typography.headline,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  listItemIcon: {
    color: colors.buttonPrimary1
  },
  link: {
    textDecoration: "none"
  }
});

interface SidenavProps {
  classes: any;
  projectId: string
}

const SidenavComponent: React.SFC<SidenavProps> = props => {
  const { classes, projectId } = props;
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <img
          className={classes.logo}
          src="https://spaceuptech.com/icons/logo.png"
          alt=""
        />
      </div>
      <Divider />
      <List>
        <Link to={`/`} className={classes.link}>
          <ListItem className={classes.listItemText} button>
            <ListItemIcon className={classes.listItemIcon}>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="All Projects" />
          </ListItem>
        </Link>
        <Link to={`/projects/${projectId}`} className={classes.link}>
          <ListItem className={classes.listItemText} button>
            <ListItemIcon className={classes.listItemIcon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Project Overview" />
          </ListItem>
        </Link>
        <Link to={`/projects/${projectId}/user-management`} className={classes.link}>
          <ListItem className={classes.listItemText} button>
            <ListItemIcon className={classes.listItemIcon}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="User Management" />
          </ListItem>
        </Link>
        <Link to={`/projects/${projectId}/database`} className={classes.link}>
          <ListItem className={classes.listItemText} button>
            <ListItemIcon className={classes.listItemIcon}>
              <DnsIcon />
            </ListItemIcon>
            <ListItemText primary="Database" />
          </ListItem>
        </Link>
        <Link to={`/projects/${projectId}/realtime`} className={classes.link}>
          <ListItem className={classes.listItemText} button>
            <ListItemIcon className={classes.listItemIcon}>
              <NotificationsActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Real-Time" />
          </ListItem>
        </Link>
        <Link to={`/projects/${projectId}/functions`} className={classes.link}>
          <ListItem className={classes.listItemText} button>
            <ListItemIcon className={classes.listItemIcon}>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Functions" />
          </ListItem>
        </Link>
        <Link to={`/projects/${projectId}/configure`} className={classes.link}>
          <ListItem className={classes.listItemText} button>
            <ListItemIcon className={classes.listItemIcon}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configure" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Drawer>
  );
};

export default withStyles(styles)(SidenavComponent);
