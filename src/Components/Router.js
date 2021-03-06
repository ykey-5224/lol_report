import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import SearchResult from "../Routes/SearchResult";
import Header from "../Routes/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Search} />
        <Route path="/search/:name" component={SearchResult} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);