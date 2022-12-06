import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Chat Entry
        </Link>
      </span>
      {user ? (

      <ul className="list">
        <li className="listItem">
          <img src="" alt="" className="avatar" />
        </li>
        <li className="listItem">Mistlebee</li>
        <li className="listItem">Log Out</li>
      </ul>
      ):<Link to="/login" className="link">Log In</Link>}
    </div>
  );
};

export default Navbar;
