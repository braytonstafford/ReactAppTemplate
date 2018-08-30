import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import MaterialUiForm from "./MaterialUiForm";
import Dashboard from "./Dashboard";
import Patient from "./Patient";
import Login from "./Login";
import Action from "./Action";
import Table from "./Table";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/form" component={MaterialUiForm} />
      <Route path="/patient" component={Patient} />
      <Route path="/action" component={Action} />
      <Route path="/table" component={Table} />
      <Route path="/login" component={Login} />
    </Switch>
  </main>
);

export default Main;
