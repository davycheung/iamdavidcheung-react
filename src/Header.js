import React from "react";
import "./App.css";

function Header() {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                <h3 className="masthead-brand">davidcheung</h3>
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
