import { connect } from "react-redux";
import DatabaseComponent from "./DatabaseComponent";
import store from "../../../../store";
import { set, upsert } from "../../../../reducers/helper";

function getDbsMap(projectId: string, env: string): any {
  const currentConfig = store.getState().currentConfig;
  const dbsMapDetailed =
    currentConfig.projects[projectId].env[env].modules.crud;
  let dbsMap: any = {};
  for (var dbName in dbsMapDetailed) {
    dbsMap[dbName] = {
      dbType: dbName,
      isPrimary: dbsMapDetailed[dbName].isPrimary
    };
  }
  return dbsMap;
}

function getPrimaryDb(projectId: string, env: string): string {
  const currentConfig = store.getState().currentConfig;
  const dbs = currentConfig.projects[projectId].env[env].modules.crud;
  let primaryDb = "";
  for (var dbName in dbs) {
    if (dbs[dbName].isPrimary) {
      primaryDb = dbName;
      break;
    }
  }
  return primaryDb;
}

function getCollections(projectId: string, env: string, dbType: string): any {
  const currentConfig = store.getState().currentConfig;
  const projectEnvConfig = currentConfig.projects[projectId].env[env];
  return projectEnvConfig.modules.crud[dbType].collections;
}

function getRules(projectId: string, env: string): any {
  const currentConfig = store.getState().currentConfig;
  const projectEnvConfig = currentConfig.projects[projectId].env[env];
  const selectedDb = store.getState().uiState.crud.selectedDb;
  const selectedTableName = store.getState().uiState.crud.selectedTable;
  const selectedTableConfig =
    projectEnvConfig.modules.crud[selectedDb].collections[selectedTableName];
  if (!selectedTableConfig) return "";
  return selectedTableConfig.rules;
}

function getConn(projectId: string, env: string): any {
  const currentConfig = store.getState().currentConfig;
  const projectEnvConfig = currentConfig.projects[projectId].env[env];
  const selectedDb = store.getState().uiState.crud.selectedDb;
  const selectedDbConfig = projectEnvConfig.modules.crud[selectedDb];
  if (!selectedDbConfig) return "";
  return selectedDbConfig.conn;
}

function selectDb(projectId: string, env: string, dbType: string) {
  const colls = getCollections(projectId, env, dbType);
  store.dispatch(set("uiState.crud.selectedDb", dbType));
  store.dispatch(set("uiState.crud.selectedTable", Object.keys(colls)[0]));
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;
  return {
    addSecondaryDb: (dbType: string) => {
      dispatch(
        upsert(
          `currentConfig.projects.${projectId}.env.${env}.modules.crud.${dbType}`,
          {
            conn: "",
            collections: {},
            isPrimary: false
          }
        )
      );
    },
    removeSecondaryDb: (dbType: string) => {
      // If db to be removed is a selected one then first change selected db to primary db
      const selectedDb = store.getState().uiState.crud.selectedDb;
      if (selectedDb === dbType) {
        selectDb(projectId, env, getPrimaryDb(projectId, env));
      }

      // Remove db
      let currentConfig = store.getState().currentConfig;
      delete currentConfig.projects[projectId].env[env].modules.crud[dbType];
      dispatch(set("currentConfig", currentConfig));
    },
    addTable: (name: string) => {
      const selectedDb = store.getState().uiState.crud.selectedDb;
      dispatch(
        upsert(
          `currentConfig.projects.${projectId}.env.${env}.modules.crud.${selectedDb}.collections.${name}`,
          {
            isRealtimeEnabled: false,
            rules: JSON.stringify(
              {
                create: { rule: "allow" },
                read: { rule: "allow" },
                update: { rule: "allow" },
                delete: { rule: "allow" }
              },
              null,
              "\t"
            )
          }
        )
      );
      dispatch(set(`uiState.crud.selectedTable`, name));
    },
    removeTable: (tableName: string) => {
      const selectedDb = store.getState().uiState.crud.selectedDb;
      let currentConfig = store.getState().currentConfig;
      delete currentConfig.projects[projectId].env[env].modules.crud[selectedDb]
        .collections[tableName];

      dispatch(set("currentConfig", currentConfig));
      // If removed table was a selected table then change selected table
      const selectedTable = store.getState().uiState.crud.selectedTable;
      if (selectedTable === tableName) {
        const colls = getCollections(projectId, env, selectedDb);
        if (Object.keys(colls).length) {
          store.dispatch(
            set("uiState.crud.selectedTable", Object.keys(colls)[0])
          );
        }
      }
    },
    updateSecurityRules: (rules: string) => {
      const selectedTable = store.getState().uiState.crud.selectedTable;
      const selectedDb = store.getState().uiState.crud.selectedDb;
      dispatch(
        set(
          `currentConfig.projects.${projectId}.env.${env}.modules.crud.${selectedDb}.collections.${selectedTable}.rules`,
          rules
        )
      );
    },
    updateConnString: (conn: string) => {
      const selectedDb = store.getState().uiState.crud.selectedDb;
      dispatch(
        set(
          `currentConfig.projects.${projectId}.env.${env}.modules.crud.${selectedDb}.conn`,
          conn
        )
      );
    },
    selectTable: (table: string) =>
      dispatch(set("uiState.crud.selectedTable", table)),
    selectDb: (dbType: string) => selectDb(projectId, env, dbType),
    selectTab: (tabIndex: number) =>
      dispatch(set("uiState.crud.selectedTab", tabIndex))
  };
};

const mapStateToProps = (state: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;
  return {
    dbsMap: getDbsMap(projectId, env),
    selectedDb: state.uiState.crud.selectedDb,
    selectedTable: state.uiState.crud.selectedTable,
    selectedTab: state.uiState.crud.selectedTab,
    collections: Object.keys(
      getCollections(projectId, env, state.uiState.crud.selectedDb)
    ),
    securityRules: getRules(projectId, env),
    connString: getConn(projectId, env)
  };
};

const DatabaseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseComponent);

export default DatabaseContainer;
