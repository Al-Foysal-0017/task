import React from 'react';
import Home from "./pages/Home"
import Notification from "./pages/Notification"
import AddProject from "./pages/AddProject"
import RegisterList from "./pages/RegisterList"
import AddSession from "./pages/AddSession"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/notification" component={Notification} exact />
        <Route path="/add-project" component={AddProject} exact />
        <Route path="/register-list" component={RegisterList} exact />
        <Route path="/add-session" component={AddSession} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
