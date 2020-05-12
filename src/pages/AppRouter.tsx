import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { DashboardPage } from "./dashboard/dashboard";
import RegisterPage from "./auth/register/Register";
import { LoginPage } from "./auth/login/Login";
import VerificationPage from "./auth/verification/verification";
import StatusPage from "./auth/status/Status";
import CompaniesListPage from "./companiesList/CompaniesList";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/verification" component={VerificationPage} />
        <Route path="/status" component={StatusPage} />
        <Route path="/list-companies" component={CompaniesListPage} />
      </Switch>
    </Router>
  );
};
