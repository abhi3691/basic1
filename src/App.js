/** @format */

import React from "react";
import { Header, Footer } from "./Home";
import Contact from "./Contact";
function greet(name) {
    return <h3>{name}</h3>;
}
function App() {
    var age = 16;
    return (
        <div>
            <Contact />
            <p>some contents</p>
        </div>
    );
}
export default App;
