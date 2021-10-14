import React from "react";
import { connect } from "react-redux";

import classes from "./Users.module.css";
import User from "./User";

function Users({ isLoading, isError, users }) {
  return (
    <div className={classes.container}>
      {isLoading && <p>Users are loading, please wait...</p>}
      {isError && <p>An error has occured</p>}
      {users.length === 0 && (
        <p style={{ fontSize: "2em", textAlign: "center" }}>
          No users, either click button 'Load users' or button 'Add one user'
        </p>
      )}
      <div className={classes.wrapper}>
        {users.length > 0 &&
          users.map((user) => <User key={user.login.uuid} data={user} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  isError: state.users.isError,
});

export default connect(mapStateToProps)(Users);
