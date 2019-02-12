import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";

import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/selection/active-line.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/edit/closebrackets.js";

import { colors } from "../../../../../styles/constants";

const styles = (theme: any) => ({
  card: {
    marginTop: theme.spacing.unit * 4,
    boxShadow:
      "0 2px 12px rgba(0,0,0,.04), 0 6px 12px rgba(0,0,0,.0125), 0 12px 24px rgba(0,0,0,.00625), 0 24px 48px rgba(0,0,0,.003125), 0 48px 96px rgba(0,0,0,.003125)",
    minHeight: theme.spacing.unit * 56,
    border: "1px solid #e0e0e0"
  },
  leftSection: {
    borderRight: "1px solid #eee"
  },
  rightSection: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    height: "100%"
  },
  addSection: {
    height: theme.spacing.unit * 6,
    display: "flex",
    alignItems: "center",
    ...theme.typography.display3,
    color: colors.secondaryColor,
    paddingLeft: theme.spacing.unit * 2
  },
  addLabel: {
    marginLeft: theme.spacing.unit
  },
  collectionHolder: {
    display: "flex",
    height: theme.spacing.unit * 6,
    alignItems: "center",
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    borderBottom: "1px solid #eee"
  },
  hintSection: {
    height: theme.spacing.unit * 8,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.unit * 2,
    borderTop: "1px solid #eee"
  },
  deleteIcon: {
    marginLeft: "auto"
  },
  connSection: {
    display: "flex",
    height: theme.spacing.unit * 6,
    background: "#fafafa"
  },
  connLabel: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    paddingLeft: theme.spacing.unit * 2
  },
  inputWrapper: {
    marginLeft: theme.spacing.unit,
    flexGrow: 1
  }
});

export interface Props {
  classes: any;
  dbsMap: any;
  collections: string[];
  securityRules: string;
  connString: string;
  selectDb: (dbType: string) => void;
  selectTable: (tableName: string) => void;
  addTable: (tableName: string) => void;
  removeTable: (tableName: string) => void;
  updateSecurityRules: (rules: string) => void;
  updateConnString: (conn: string) => void;
}

class RulesApp extends React.Component<Props, any> {
  public render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid className={classes.card} container spacing={0}>
          <Grid className={classes.leftSection} item sm={3}>
            <div className={classes.addSection}>
              <AddIcon />
              <span className={classes.addSection.label}>Collection</span>
            </div>
            <Divider />
            <div>
              {this.props.collections.map(col => (
                <div
                  className={classes.collectionHolder}
                  onClick={(event: any) => {
                    this.props.selectTable(col);
                  }}
                >
                  {col}
                  <DeleteIcon
                    className={classes.deleteIcon}
                    onClick={(event: any) => {
                      this.props.removeTable(col);
                    }}
                  />
                </div>
              ))}
            </div>
          </Grid>
          <Grid item sm={9}>
            <div className={classes.rightSection}>
              <div className={classes.connSection}>
                <span className={classes.connLabel}>Connection String: </span>
                <div className={classes.inputWrapper}>
                  <InputBase value={this.props.connString} onChange={(event: any) => {
                    this.props.updateConnString(event.target.value)
                  }}/>
                </div>
              </div>
              <CodeMirror
                value={this.props.securityRules}
                options={{
                  mode: { name: "javascript", json: true },
                  lineNumbers: true,
                  styleActiveLine: true,
                  matchBrackets: true,
                  autoCloseBrackets: true,
                  tabSize: 2
                }}
                onBeforeChange={(editor, data, value) => {
                  this.props.updateSecurityRules(value);
                }}
                onChange={(editor, data, value) =>
                  this.props.updateSecurityRules(value)
                }
              />
              <div className={classes.hintSection}>
                Hint : To indent press ctrl + A in the editor and then shift +
                tab
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RulesApp);
