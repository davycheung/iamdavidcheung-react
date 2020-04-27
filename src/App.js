import React from "react";
import "./styles/App.css";
import "./styles/Homer.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
