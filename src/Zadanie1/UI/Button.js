import React from "react";

export default function Button({ label, cssClass, onClick }) {
  return <button className={cssClass} onClick={onClick}>{label}</button>;
}
