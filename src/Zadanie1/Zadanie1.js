import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { showMessage } from "./Message/duck/actions";

import Home from "./Home/components/Home";
import Users from "./Users/components/Users";
import Message from "./Message/components/Message"

import classes from "./Zadanie1.module.css";

function Zadanie1({ isLoading, isAdded, isReset, messages, showMessage,type,text }) {

  useEffect(() => {
    
    if (isLoading) {
      showMessage("info", "Users had been loaded");
      setTimeout(()=>{
        showMessage("","")
      },3000)
    }
    if (isAdded) {
      showMessage("warning", "User has been added");
      setTimeout(()=>{
        showMessage("","")
      },3000)
    }

    if (isReset) {
      showMessage("danger", "Users had been removed");
      setTimeout(()=>{
        showMessage("","")
      },3000)
    }
    return () => {
    };
  }, [isLoading, isAdded, isReset,showMessage]);

  return (
    <Router>
      <nav className={classes.nav}>
        <Link to="/" className={classes.a}>
          Home
        </Link>
        <Link to="/users" className={classes.a}>
          Users
        </Link>
      </nav>
      <div>{messages && <Message type={type} text={text} />}</div>
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

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  isLoading: state.users.isLoading,
  isAdded: state.users.isAdded,
  isReset: state.users.isReset,
  type: state.messages.messages[0].type,
  text: state.messages.messages[0].text
});
const mapDispatchToProps = (dispatch) => ({
  showMessage: (type,text) => dispatch(showMessage({type,text})),
});

export default connect(mapStateToProps,mapDispatchToProps)(Zadanie1);
