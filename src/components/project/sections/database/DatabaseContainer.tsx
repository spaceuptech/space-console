import { connect } from "react-redux";
import DatabaseComponent from "./DatabaseComponent";

function getCrudConfig(config: any, projectId: string, env: string) {
  if (!config.projects || !config.projects[projectId]) {
    return
  }

  const project = config.projects[projectId]
  if (!project.env || !project.env[env] || !project.env[env].modules || !project.env[env].modules.crud) {
    return
  }

  return project.env[env].modules.crud
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;

  return {
    addSecondaryDb: (dbType: string) => {

    },
    removeSecondaryDb: (dbType: string) => {

    }
  }
}
 
const mapStateToProps = (state: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;
  return {
    crud: getCrudConfig(state.config, projectId, env)
  }
}

const DatabaseContainer = connect(mapStateToProps)(DatabaseComponent)

export default DatabaseContainer
