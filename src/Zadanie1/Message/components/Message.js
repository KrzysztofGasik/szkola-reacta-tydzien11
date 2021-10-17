import React from "react";
import classes from "./Message.module.css";

export default function Message({ type, text }) {
  let colorClass;

  switch (type) {
    case "info":
      colorClass = `${classes.info} ${classes.message}`;
      break;
    case "warning":
      colorClass = `${classes.warning} ${classes.message}`;
      break;
    case "danger":
      colorClass = `${classes.danger} ${classes.message}`;
      break;
    default:
      break;
  }
  return <div className={colorClass}>{text}</div>;
}
