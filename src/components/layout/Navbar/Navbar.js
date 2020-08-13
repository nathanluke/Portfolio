import React from 'react'
import { Link } from 'react-router-dom';
import Button from "../Navbar/Slidedrawer/drawerbutton";
import "./Navbar.css"


const Navbar = props => {
   
    return (
      <header className="Navbar">
          <nav className="Navbar-navigation">
             <div>
                 <Button click={props.drawerclickhandle} />
             </div>
             <div className="Navbar-logo"><a href="/">Nathan Swartz</a></div>
             <div className="space"></div>
             <div className="Navbar-navigation-items">
                 <ul>
                     <li> <Link to="/home">Home</Link> </li>
                     <li> <Link to="/about">About</Link> </li>
                     <li> <Link to="/projects">Projects</Link> </li>
                     <li> <Link to="/Testamonials">Testamonials</Link> </li>
                     <li> <Link to="/Contact">Contact Me</Link>"</li>
                 </ul>
             </div>

             
          </nav>
      </header>
    )

  }

export default Navbar;
