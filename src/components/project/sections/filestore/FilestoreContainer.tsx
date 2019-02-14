import { connect } from "react-redux";
import FilestoreComponent from "./FilestoreComponent";
import store from "../../../../store";
import { set, upsert } from "../../../../reducers/helper";

function getFileStoreConfig(projectId: string, env: string): any {
  const currentConfig = store.getState().currentConfig;
  const fileStoreConfig =
    currentConfig.projects[projectId].env[env].modules.fileStore;
  return fileStoreConfig;
}

function getRule(fileStoreConfig: any): any {
  const selectedRule = store.getState().uiState.fileStore.selectedRule;
  if (fileStoreConfig.rules[selectedRule]) {
    return fileStoreConfig.rules[selectedRule];
  }
  return "";
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;
  return {
    enableFileStore: (storeType: string) => {
      dispatch(
        upsert(
          `currentConfig.projects.${projectId}.env.${env}.modules.fileStore`,
          {
            enabled: true,
            storeType: storeType,
            conn: "./",
            rules: {}
          }
        )
      );
    },
    addRule: (ruleName: string) => {
      dispatch(
        upsert(
          `currentConfig.projects.${projectId}.env.${env}.modules.fileStore.rules.${ruleName}`,
          JSON.stringify(
            {
              prefix: "/",
              rules: {
                create: { rule: "allow" },
                read: { rule: "allow" },
                delete: { rule: "allow" }
              }
            },
            null,
            "\t"
          )
        )
      );
      dispatch(set(`uiState.fileStore.selectedRule`, ruleName));
    },
    removeRule: (ruleName: string) => {
      let currentConfig = store.getState().currentConfig;
      delete currentConfig.projects[projectId].env[env].modules.fileStore.rules[
        ruleName
      ];

      dispatch(set("currentConfig", currentConfig));
      // If removed rule was a selected rule then change selected rule
      const selectedRule = store.getState().uiState.fileStore.selectedRule;
      if (selectedRule === ruleName) {
        const rules =
          currentConfig.projects[projectId].env[env].modules.fileStore.rules;
        if (Object.keys(rules).length) {
          store.dispatch(
            set("uiState.fileStore.selectedRule", Object.keys(rules)[0])
          );
        }
      }
    },
    updateSecurityRules: (rules: string) => {
      const selectedRule = store.getState().uiState.fileStore.selectedRule;
      dispatch(
        set(
          `currentConfig.projects.${projectId}.env.${env}.modules.fileStore.rules.${selectedRule}`,
          rules
        )
      );
    },
    updateConnString: (conn: string) => {
      dispatch(
        set(
          `currentConfig.projects.${projectId}.env.${env}.modules.fileStore.conn`,
          conn
        )
      );
    },
    selectRule: (ruleName: string) =>
      dispatch(set("uiState.fileStore.selectedRule", ruleName)),
    selectTab: (tabIndex: number) =>
      dispatch(set("uiState.fileStore.selectedTab", tabIndex))
  };
};

const mapStateToProps = (state: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;
  const fileStoreConfig = getFileStoreConfig(projectId, env);
  return {
    selectedRule: state.uiState.fileStore.selectedRule,
    selectedTab: state.uiState.fileStore.selectedTab,
    enabled: fileStoreConfig.enabled,
    storeType: fileStoreConfig.storeType,
    connString: fileStoreConfig.conn,
    rulesList: Object.keys(fileStoreConfig.rules),
    securityRules: getRule(fileStoreConfig)
  };
};

const FilestoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilestoreComponent);

export default FilestoreContainer;
