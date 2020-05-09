import React from "react";

function About() {
    return (
        <div className="text-left">
            <h1 className="mb-3 cover-heading">About</h1>
            <p>
                Engineering Lead at{" "}
                <a href="http://www.climbcredit.com">Climb Credit</a>, helping
                students build careers.
            </p>
            <p>
                Previously Head of Engineering at{" "}
                <a href="http://www.continuumeconomics.com">
                    Continuum Economics
                </a>
                , building a research distribution platform delivering economic
                research to trading desks and key decision makers throughout the
                world.
            </p>
            <p>
                B.S. Computer Science & M.S. Applied Mathematics at Stony Brook
                University.
            </p>
            <p>
                When not working you can find me at a variety of meetups,
                hiking, reading, and otherwise enjoying life.
            </p>
        </div>
    );
}

export default About;
