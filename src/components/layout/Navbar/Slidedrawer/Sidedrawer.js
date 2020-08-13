import React from "react";
import { Link } from "react-router-dom";
import "./Sidedrawer.css";

const Sidedrawer = props => (
    <nav className="sidedrawer">
        <ul>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/Contact">Contact</Link> </li>
            <li> <Link to="/about">Projects</Link> </li>

        </ul>
    </nav>
)

export default Sidedrawer;