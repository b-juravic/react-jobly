import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Home from "./Home";
import Login from "./Login";
import Company from "./Company";
import PrivateRoute from "./PrivateRoute";

/*
 * Routes function renders Components by assigned URL path.
 */
function Routes() {

  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/login"><Login /></Route>

      <PrivateRoute exact path="/companies"><Companies /></PrivateRoute>
      <PrivateRoute exact path="/companies/:handle"><Company /></PrivateRoute>
      <PrivateRoute exact path="/jobs"><Jobs /></PrivateRoute>
      <PrivateRoute exact path="/profile"><Profile /></PrivateRoute>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;