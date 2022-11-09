import React from "react";
import logo from "../assets/logo.png";

function NavBar() {
    return (
        <div className="navbar" >
            <div class="logo">
                <img src={logo} alt="logo" height="60px" />
            </div>
            <div className="navlinks">
                <a href="/home">Home</a>

                <a href="/about">About us</a>

                <a href="/category">category</a>

                <a href="/listing">Job Listing</a>
            </div>
        </div>
    )
}

export default NavBar;