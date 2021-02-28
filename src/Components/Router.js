import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Header from "../Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:name" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);