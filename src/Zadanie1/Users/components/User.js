import React from "react";

import classes from "./User.module.css";

export default function User({ data }) {
  return (
    <div className={classes.Card}>
      <p className={classes.Par}>{data.name.first}</p>
      <img
        src={data.picture.large}
        alt={data.picture.large}
        className={classes.Image}
      />
    </div>
  );
}
