import React from "react";
import ("./Nav.css");
const Nav = props =>(
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul>
            <li className="nav-item">
                <a className="nav-item" href="/">Clicky Game</a>
            </li>
            <li className="nav-item">
                Click an image to begin!
            </li>
            <li className="nav-item">
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
)

export default Nav;