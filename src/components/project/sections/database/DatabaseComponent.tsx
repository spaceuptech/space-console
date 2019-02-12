import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ConfigureDatabaseComponent from "./ConfigureDatabaseComponent";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  typography: {
    padding: theme.spacing.unit * 3
  },
  tabHolder: {
    padding: theme.spacing.unit * 4
  }
});

interface Props {
  classes: any;
  crud: any;
  addSecondaryDb: (dbType: string) => void;
  removeSecondaryDb: (dbType: string) => void;
}

interface State {
  selectedTab: number;
  selectedDb: string;
}

class DatabaseComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Find Primary Db
    let primaryDb = "";
    Object.keys(props.crud).forEach(dbType => {
      if (props.crud[dbType].isPrimary) primaryDb = dbType;
    });

    this.state = { selectedTab: 0, selectedDb: primaryDb };

    this.changeSelectedTab = this.changeSelectedTab.bind(this);
    this.changeSelectedDb = this.changeSelectedDb.bind(this);
    this.configureDb = this.configureDb.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    
  }

  changeSelectedTab(index: number) {
    this.setState({ selectedTab: index });
  }

  changeSelectedDb(dbType: string) {
    this.setState({ selectedDb: dbType });
  }

  configureDb(dbType: string) {
    this.changeSelectedDb(dbType);
    this.changeSelectedTab(1)
  }

  handleTabChange(event: any, index: number) {
    this.changeSelectedTab(index)
  }
  public render() {
    const { classes, crud, addSecondaryDb, removeSecondaryDb } = this.props;
    const { selectedTab } = this.state;

    return (
      <div className={classes.root}>
        <Tabs value={selectedTab} onChange={this.handleTabChange}>
          <Tab disableRipple label="Configure" />
          <Tab disableRipple label="Rules" />
        </Tabs>
        <div className={classes.tabHolder}>
          {selectedTab === 0 && (
            <ConfigureDatabaseComponent
              crud={crud}
              addSecondaryDb={addSecondaryDb}
              removeSecondaryDb={removeSecondaryDb}
              configure={this.configureDb}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DatabaseComponent);
