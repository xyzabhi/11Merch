import React from "react";
import "./sign-in-sign-up.styles.scss";
import { Switch, Route } from "react-router-dom";
import SignIn from "./sign-in/sign-in.component";
import SignUp from "./sign-up/sign-up.component";
export default function SignInSignUp() {
  return (
    <div>
      <Switch>
        <Route exact path="/signin" component={SignIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </div>
  );
}
