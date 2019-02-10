import { connect } from "react-redux";
import TemplateListComponent from "./TemplateListComponent";


const mapStateToProps = (state: any) => {
  return {
    templates: state.templates
  }
}

const TemplateListContainer = connect(mapStateToProps)(TemplateListComponent)

export default TemplateListContainer
