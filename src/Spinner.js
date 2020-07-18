import "./Spinner.css";
import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui large text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};
export default Spinner;
