import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/components/Home";
import Users from "./Users/components/Users";

import classes from "./Zadanie1.module.css";

export default function Zadanie1() {
  return (
    <Router>
      <nav className={classes.nav}>
        <Link to="/" className={classes.a}>Home</Link>
        <Link to="/users" className={classes.a}>Users</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}
