import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

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
