 import React from "react";
import "./drawerbutton.css";


 const Button = props => (

     <button className="toggle-button" onClick={props.click}>
         <div className="line"/>
         <div className="line"/>
         <div className="line"/>
     </button>
 );

 export default Button;