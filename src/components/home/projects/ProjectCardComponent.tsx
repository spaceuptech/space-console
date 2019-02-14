import * as React from 'react';

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Popover from '@material-ui/core/Popover';
import Typography from "@material-ui/core/Typography";
import MoreVert from "@material-ui/icons/MoreVert";

const styles = (theme: any) => ({
  card: {
    minHeight: theme.spacing.unit * 20
  },
  title: theme.typography.display2,
  options: {
    color: "#002C39",
    float: "right" as "right",
    cursor: "pointer  "
  },
  subTitle: {
    ...theme.typography.body1,
    marginTop: theme.spacing.unit
  },
  custPopover: {
    padding: "10px 20px",
    color: "#c62828",
    cursor: "pointer"
  }
})

export interface Project {
  id: string
  name: string
}

interface ProjectProp extends Project {
  classes: any
}

class ProjectCard extends React.Component<ProjectProp, any> {
  constructor(props: ProjectProp) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }
  handleClick = (e:any) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  public render() {
    const { classes, name, id } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.title}>
            {name}
            <span className={classes.options}>
              <MoreVert onClick={this.handleClick} />
              <Popover
                id="simple-popper"
                open={open}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                className={classes.custPopover}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <Typography className={classes.custPopover}>Delete</Typography>
              </Popover>
            </span>
          </div>
          <Typography className={classes.subTitle}>
            {id}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ProjectCard);