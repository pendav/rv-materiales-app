import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;