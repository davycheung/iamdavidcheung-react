import React from "react";
import Homer from "./Homer";

function Home() {
    return (
        <div>
            <Homer />
            <h1 className="cover-heading">Hi, I'm David.</h1>
            <p>
                I'm a software engineer in <strong>New York</strong>, passionate
                about building products, developing teams, learning, and
                mentoring engineers.
            </p>
            <p>
                <a className="btn-icon" href="https://github.com/davycheung">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a
                    className="btn-icon"
                    href="https://www.linkedin.com/in/davycheung/"
                >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a
                    className="btn-icon"
                    href="https://www.instagram.com/realdavidcheung"
                >
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a
                    className="btn-icon"
                    href="https://www.last.fm/user/supperdaves/listening-report/year"
                >
                    <i className="fab fa-lastfm fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a className="btn-icon" href="mailto:realdavidcheung@gmail.com">
                    <i className="fas fa-envelope fa-2x"></i>
                </a>
                &nbsp; &nbsp;
            </p>
        </div>
    );
}

export default Home;
