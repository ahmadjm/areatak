import React from "react"
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"
import { DashboardPage } from "./dashboard/dashboard"
import { AuthPage } from "./auth/auth"
import { Register } from "./companyRegister/companyRegister"


export const AppRouter = ()=>{
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={DashboardPage}/>
                <Route path="/auth" component={AuthPage}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </Router>
    )
}