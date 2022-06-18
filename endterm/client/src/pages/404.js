import React from "react";
import { Link } from "react-router-dom";

const Err404 = () => {
  return (
    <div>
      <h1>ERROR 404</h1>
      <h3>There is no such page like what you are looking for.</h3>
      <Link to="/">
        <input type="button" value="go back" />
      </Link>
    </div>
  );
};

export default Err404;
