import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Home from "./Home";
import Login from "./Login";
import CompanyDetails from "./CompanyDetails";


function Routes() {

    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/companies"><Companies /></Route>
            <Route exact path="/companies/:companyName"><CompanyDetails /></Route>

            <Route exact path="/jobs"><Jobs /></Route>

            <Route exact path="/login"><Login /></Route>
            <Route exact path="/profile"><Profile /></Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;