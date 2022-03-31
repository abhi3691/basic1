/** @format */

import React from "react";
import { Header, Footer } from "./Home";
function greet(name) {
    return <h3>{name}</h3>;
}
function App() {
    var age = 16;
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}
export default App;
