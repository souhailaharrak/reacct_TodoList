import React from "react";
import "./User.css";

function User(props) {
  return (
    <div>
      <h1 className="Sa">
        {props.nam} {props.adress} {props.id}
      </h1>
    </div>
  );
}
export default User;
