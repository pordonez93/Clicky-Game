import React from "react";
import ("./Header.css");

const Header = () =>(
    <header className="header">
        <div className="header-container">
            <h1>Clicky Game!</h1>
            <p>Click on an image to earn points.</p>
            <p>But don't click on it more than once!</p>
        </div>
    </header>
);

export default Header;