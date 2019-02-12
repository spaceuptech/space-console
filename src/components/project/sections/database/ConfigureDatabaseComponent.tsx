import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import DatabaseCardComponent from "./DatabaseCardComponent";
import dbsInfo from "./config";

function getDetailedDbConfigs(dbsInfo: any, dbConfigs: any): any {
  let result: any = [];
  Object.keys(dbsInfo).forEach(dbType => {
    let dbConfig = Object.assign({}, { dbType }, dbsInfo[dbType], {
      isSecondary: dbConfigs[dbType],
      isPrimary: dbConfigs[dbType] && dbConfigs[dbType].isPrimary
    });
    result.push(dbConfig);
    return result.sort((a: any, b: any) => {
      if (a.isPrimary || (a.isSecondary && !b.isSecondary)) return -1;
      else if (!a.isSecondary && b.isSecondary) return 1;
      else return 0;
    });
  });
  return result;
}

const styles = (theme: any) => ({
  title: {
    ...theme.typography.display2,
  },
  dbList: {
    marginTop: theme.spacing.unit * 2
  }
});

export interface Props {
  classes: any;
  crud: any;
  configure: (e: any) => void;
  addSecondaryDb: (dbType: string) => void;
  removeSecondaryDb: (dbType: string) => void;
}

export interface State {}

class ConfigureDatabaseComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { classes, crud, addSecondaryDb, removeSecondaryDb, configure } = this.props;
    const dbConfigsDetailed = getDetailedDbConfigs(dbsInfo, crud);
    return (
      <div>
        <Typography className={classes.title}>Select Databases</Typography>
        <Grid className={classes.dbList} container spacing={32}>
          {dbConfigsDetailed.map((dbConfig: any, index: number) => {
            return (
              <Grid item sm={4} key={index}>
                <DatabaseCardComponent
                  {...dbConfig}
                  add={addSecondaryDb}
                  remove={removeSecondaryDb}
                  configure={configure}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ConfigureDatabaseComponent);
