import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from "./components/shop-page/ShopPage";
import Header from "./components/header/header.component";
import SignInSignUp from "./components/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={SignInSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
