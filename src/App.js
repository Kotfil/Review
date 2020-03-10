import React, {Component} from 'react';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Technologies from "./Technologies";

const App = () => {
    return (
        <div className="Technologies">
            <Header/>
            <Technologies/>
            <Footer/>

        </div>
    );
}

export default App;
