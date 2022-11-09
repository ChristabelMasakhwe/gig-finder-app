import React from "react";
import logo from "../assets/logo.png";

function NavBar() {
    return (
        <header>
            <div className="navbar" >
                <div class="logo">
                    <img src={logo} alt="logo" height="100px" />
                </div>
                <div className="navlinks">
                    <a href="/home">Home</a>
                    <a href="/about">About us</a>
                    <a href="/category">Category</a>
                    <a href="/listing" id="listing">New-Listing</a>
                </div>
            </div>
        </header>
    )
}

export default NavBar;