import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ConfigureDatabaseComponent from "./configure/ConfigureDatabaseComponent";
import RulesComponent from "../../../general/rules/RulesComponent";
import Grid from "@material-ui/core/Grid";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  typography: {
    padding: theme.spacing.unit * 3
  },
  content: {
    marginTop: theme.spacing.unit * 4
  }
});

interface Props {
  classes: any;
  dbsMap: any;
  selectedDb: any;
  selectedTable: any;
  selectedTab: any;
  collections: any;
  securityRules: string;
  connString: string;
  addSecondaryDb: (dbType: string) => void;
  removeSecondaryDb: (dbType: string) => void;
  updateConnString: (connString: string) => void;
  addTable: (tableName: string) => void;
  removeTable: (tableName: string) => void;
  updateSecurityRules: (rules: string) => void;
  selectDb: (dbType: string) => void;
  selectTable: (tableName: string) => void;
  selectTab: (tabIndex: number) => void;
}

class DatabaseComponent extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.configureDb = this.configureDb.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  configureDb(dbType: string) {
    this.props.selectDb(dbType);
    this.props.selectTab(1);
  }

  handleTabChange(event: any, tabIndex: number) {
    this.props.selectTab(tabIndex);
  }
  public render() {
    const { classes, selectedTab } = this.props;
    const ruleLabel =
      this.props.selectedDb === "mongo" ? "Collection" : "Table";
    return (
      <div className={classes.root}>
        <Tabs value={selectedTab} onChange={this.handleTabChange}>
          <Tab disableRipple label="Configure" />
          <Tab disableRipple label="Rules" />
        </Tabs>
        <Grid className={classes.content} container>
          <Grid item sm={1} />
          <Grid item sm={10}>
            {selectedTab === 0 && (
              <ConfigureDatabaseComponent
                dbsMap={this.props.dbsMap}
                addSecondaryDb={this.props.addSecondaryDb}
                removeSecondaryDb={this.props.removeSecondaryDb}
                configure={this.configureDb}
              />
            )}
            {selectedTab === 1 && (
              <RulesComponent
                ruleLabel={ruleLabel}
                rule={this.props.securityRules}
                rulesList={this.props.collections}
                connString={this.props.connString}
                updateRule={this.props.updateSecurityRules}
                addRule={this.props.addTable}
                selectRule={this.props.selectTable}
                removeRule={this.props.removeTable}
                updateConnString={this.props.updateConnString}
              />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DatabaseComponent);
