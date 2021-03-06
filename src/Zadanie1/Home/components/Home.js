import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../Users/duck/operations";
import { resetUsers } from "../../Users/duck/actions";

import classes from "../../UI/Button.module.css";
import Button from "../../UI/Button";
import Users from "../../Users/components/Users";
import homeClasses from "./Home.module.css";

function Home({
  fetchUsers,
  addUser,
  resetUsers
}) {
  return (
    <div className={homeClasses.wrapper}>
      <div>
      <Button
        label="Load users"
        onClick={fetchUsers}
        cssClass={`${classes.button} ${classes.buttonLoad}`}
      />
      <Button
        label="Add one user"
        onClick={addUser}
        cssClass={`${classes.button} ${classes.buttonAdd}`}
      />
      <Button
        label="Reset users"
        onClick={resetUsers}
        cssClass={`${classes.button} ${classes.buttonReset}`}
      />
      </div>
      <Users />
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers(10, "fetch")),
  addUser: () => dispatch(fetchUsers(1, "add")),
  resetUsers: () => dispatch(resetUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
