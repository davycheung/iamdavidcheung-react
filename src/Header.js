import React from "react";
import "./App.css";

function Header() {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <span className="masthead-brand">
                    <span>
                        <img className="brand" src="/favicon.ico" />
                        &nbsp;
                    </span>
                    <span>
                        david<strong>cheung</strong>
                    </span>
                </span>

                <nav className="nav nav-masthead justify-content-center">
                    <a className="nav-link active" href="#">
                        Home
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
