import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />
            <main role="main" className="inner cover">
                <h1 className="cover-heading">Hi, I'm David.</h1>
                <p className="lead">
                    I'm a software engineer in NYC, I am passionate about
                    building products, developing teams, and mentoring
                    engineers.
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default App;
