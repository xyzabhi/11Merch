import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from "./components/shop-page/ShopPage";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
