import { connect } from "react-redux";
import UserManagementComponent from "./UserManagementComponent";
import store from "../../../../store";
import { set, upsert } from "../../../../reducers/helper";

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;
  return {
    editAuthProvider: (authType: string, key: string, value: any) => {
      dispatch(
        upsert(
          `currentConfig.projects.${projectId}.env.${env}.modules.auth.${authType}.${key}`,
          value
        )
      );
    }
  };
};

const mapStateToProps = (state: any, ownProps: any) => {
  const projectId = ownProps.match.params.projectId;
  const env = ownProps.match.params.env;
  return {
    authConfig: Object.assign(
      {},
      state.currentConfig.projects[projectId].env[env].modules.auth
    )
  };
};

const UserManagementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagementComponent);

export default UserManagementContainer;
