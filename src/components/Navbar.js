import React from "react";
import earth from "../images/earth.svg";

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={earth} alt="earth-logo"/>
            <p> my travel journal </p>
        </nav>
    )
}