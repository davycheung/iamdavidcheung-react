import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Homer.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Reading from "./components/Reading";

function App() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />
            <main role="main" className="inner cover text-center">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                    <Route path="/reading" component={Reading} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
