import React from "react";
import { Link } from "react-router-dom";
const { useState } = React;

function Header() {
    const [activeNav, setActiveNav] = useState("home");

    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <span className="masthead-brand">
                    <span>
                        <img className="brand" src="/favicon.ico" />{" "}
                    </span>
                    <span>
                        david<strong>cheung</strong>
                    </span>
                </span>

                <nav className="nav nav-masthead justify-content-center">
                    <Link
                        className={`nav-link ${
                            activeNav === "home" ? "active" : ""
                        }`}
                        to="/"
                        onClick={() => setActiveNav("home")}
                    >
                        Home
                    </Link>
                    <Link
                        className={`nav-link ${
                            activeNav === "about" ? "active" : ""
                        }`}
                        to="/about"
                        onClick={() => setActiveNav("about")}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
