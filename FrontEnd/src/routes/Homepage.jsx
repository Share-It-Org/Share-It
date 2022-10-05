import React from 'react';
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Homepage</Link> |{" "}
        <Link to="login">About</Link>
      </nav>
    </div>
  );
}

export default Homepage;