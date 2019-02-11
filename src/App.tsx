import * as React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import SpaceCloudTheme from "./styles/theme";
import HomeComponent from "./components/home/HomeComponent";
import ProjectComponent from "./components/project/ProjectComponent";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <SpaceCloudTheme>
        <Router history={history}>
          <div style={{ height: "100%" }}>
            <Route exact path="/" component={HomeComponent} />
            <Route
              path="/projects/:projectId"
              render={routeProps => <ProjectComponent {...routeProps}/>}
            />
          </div>
        </Router>
      </SpaceCloudTheme>
    );
  }
}

export default App;
