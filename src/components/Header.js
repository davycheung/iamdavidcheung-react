import React from "react";
import { Link } from "react-router-dom";
const { useState } = React;

function Header() {
    const [activeNav, setActiveNav] = useState(
        window.location.pathname ? window.location.pathname : "/"
    );

    return (
        <header className="masthead mb-auto">
            <div>
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
                            activeNav === "/" ? "active" : ""
                        }`}
                        to="/"
                        onClick={() => setActiveNav("/")}
                    >
                        Home
                    </Link>
                    <Link
                        className={`nav-link ${
                            activeNav === "/about" ? "active" : ""
                        }`}
                        to="/about"
                        onClick={() => setActiveNav("/about")}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
