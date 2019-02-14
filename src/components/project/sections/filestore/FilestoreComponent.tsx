import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ConfigureFilestoreComponent from "./configure/ConfigureFilestoreComponent";
import RulesComponent from "../../../general/rules/RulesComponent";
import Grid from "@material-ui/core/Grid";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    ...theme.typography.display2
  },
  content: {
    marginTop: theme.spacing.unit * 4
  }
});

interface Props {
  classes: any;
  selectedRule: string;
  selectedTab: number;
  enabled: boolean;
  storeType: string;
  connString: string;
  rulesList: string[];
  securityRules: string;
  enableFileStore: (storeType: string) => void;
  updateConnString: (connString: string) => void;
  addRule: (ruleName: string) => void;
  removeRule: (ruleName: string) => void;
  updateSecurityRules: (rules: string) => void;
  selectRule: (tableName: string) => void;
  selectTab: (tabIndex: number) => void;
}

class DatabaseComponent extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.configure = this.configure.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  configure() {
    this.props.selectTab(1);
  }

  handleTabChange(event: any, tabIndex: number) {
    this.props.selectTab(tabIndex);
  }

  public render() {
    const { classes, selectedTab } = this.props;
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
              <ConfigureFilestoreComponent
                storeType={this.props.storeType}
                enable={this.props.enableFileStore}
                configure={this.configure}
              />
            )}
            {selectedTab === 1 && (
              <React.Fragment>
                {this.props.enabled && (
                  <RulesComponent
                    ruleLabel="Rule"
                    rule={this.props.securityRules}
                    rulesList={this.props.rulesList}
                    connString={this.props.connString}
                    updateRule={this.props.updateSecurityRules}
                    addRule={this.props.addRule}
                    selectRule={this.props.selectRule}
                    removeRule={this.props.removeRule}
                    updateConnString={this.props.updateConnString}
                  />
                )}
                {!this.props.enabled && (
                  <Typography className={classes.title}>Enable the file storage module first to write security rules</Typography>
                )}
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DatabaseComponent);
