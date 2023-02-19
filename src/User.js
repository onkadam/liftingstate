import React from "react";

let name = "Onkar Kadam";
function User(props) {
  return (
    <div>
      <h2>User name:</h2>
      <button onClick={() => props.alert(name)}>Click Me</button>
    </div>
  );
}
export default User;
