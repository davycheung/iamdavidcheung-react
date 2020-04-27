import React from "react";
import Homer from "./Homer";

function Main() {
    return (
        <main role="main" className="inner cover text-center">
            <Homer />
            <h1 className="cover-heading">Hi, I'm David.</h1>
            <p>
                I'm a software engineer in <strong>New York</strong>, passionate
                about building products, developing teams, learning, and
                mentoring engineers.
            </p>
            <p>
                <a className="btn-icon" href="https://github.com/davycheung">
                    <i class="fab fa-github fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a
                    className="btn-icon"
                    href="https://www.linkedin.com/in/davycheung/"
                >
                    <i class="fab fa-linkedin-in fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a
                    className="btn-icon"
                    href="https://www.instagram.com/realdavidcheung"
                >
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a
                    className="btn-icon"
                    href="https://www.last.fm/user/supperdaves/listening-report/year"
                >
                    <i class="fab fa-lastfm fa-2x"></i>
                </a>
                &nbsp; &nbsp;
                <a className="btn-icon" href="mailto:realdavidcheung@gmail.com">
                    <i class="fas fa-envelope fa-2x"></i>
                </a>
                &nbsp; &nbsp;
            </p>
        </main>
    );
}

export default Main;
