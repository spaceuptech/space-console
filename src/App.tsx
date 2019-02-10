import * as React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import SpaceCloudTheme from "./styles/theme";
import HomeComponent from "./components/home/HomeComponent";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <SpaceCloudTheme>
        <Router history={history}>
          <div style={{ height: "100%" }}>
            <Route component={HomeComponent} />
          </div>
        </Router>
      </SpaceCloudTheme>
    )
  }
}

export default App;
