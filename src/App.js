import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Ring from "./components/Ring/Ring";
import Buttons from "./components/Buttons/Buttons";
import Footer from "./components/Footer/Footer";

function App() {
    const [temp, setTemp] = useState(20);
    return (
        <div className="App">
            <Header />
            <Ring temp={temp} />
            <Buttons temp={temp} setTemp={setTemp} />
            <Footer />
        </div>
    );
}

export default App;
