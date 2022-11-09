import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <img src="" alt="logo" height="60px" />
      </div>
      <div className="navlinks">
        <a href="/home">Home</a>

        <a href="/about">About us</a>

        <a href="/category">category</a>

        <a href="/listing">Job Listing</a>
      </div>
    </div>
  );
}

export default NavBar;
