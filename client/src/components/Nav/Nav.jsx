import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Nav;
