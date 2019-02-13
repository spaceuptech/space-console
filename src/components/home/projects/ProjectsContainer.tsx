import { connect } from "react-redux";
import ProjectsComponent from "./ProjectsComponent";

function getProjects(config: any) {
  if (!config || !config.projects) {
    return []
  }

  const projectsMap = config.projects;
  return Object.keys(projectsMap).map(k => ({id: k, name: projectsMap[k].name}))
}

const mapStateToProps = (state: any) => {
  return {
    projects: getProjects(state.currentConfig)
  }
}

const ProjectsContainer = connect(mapStateToProps)(ProjectsComponent)

export default ProjectsContainer
