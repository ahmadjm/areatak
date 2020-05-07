import { Switch,Route } from "react-router-dom"
import React from "react";
import { LoginPage } from "./login/login";
import { RegisterPage } from "./register/register";
export const AuthRouter = ()=>{
    return (
        <Switch>
            <Route path="/auth/login" component={LoginPage}/>
            <Route path="/auth/register" component={RegisterPage}/>
        </Switch>
    )
}