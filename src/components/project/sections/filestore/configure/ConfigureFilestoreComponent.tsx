import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import FileCardComponent from "./FileCardComponent";
import config from "../../../../../config";

function getStoreTypes(): any {
  let result: any = [];
  const storeMap = config.fileStore;
  Object.keys(storeMap).forEach(storeType => {
    let storeConfig = Object.assign({}, { storeType }, storeMap[storeType]);
    result.push(storeConfig);
  });
  return result;
}

const styles = (theme: any) => ({
  title: {
    ...theme.typography.display2
  },
  list: {
    marginTop: theme.spacing.unit * 2
  }
});

export interface Props {
  classes: any;
  storeType: string;
  configure: () => void;
  enable: (dbType: string) => void;
}

export interface State {}

class ConfigureDatabaseComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    const { classes, storeType, configure, enable } = this.props;
    const storeConfigs = getStoreTypes();
    return (
      <div>
        <Typography className={classes.title}>Select File Store Type</Typography>
        <Grid className={classes.list} container spacing={32}>
          {storeConfigs.map((config: any) => (
            <Grid item sm={4} key={config.storeType}>
              <FileCardComponent
                {...config}
                isEnabled={config.storeType === storeType}
                enable={enable}
                configure={configure}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ConfigureDatabaseComponent);
