import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css"

function Navbar () {
    return(
        <div className="navBar">
            <CartWidget/>
        <nav>
        <ul>
		<li><a href="#">Inicio</a></li>
		<li><a href="#">Productos</a></li>
		<li><a href="#">Ofertas</a></li>
        <li><a href="#">Combos</a></li>
        <li><a href="#">Descuentos</a></li>
	 </ul>
    </nav>
    </div>  
  )
}


  export default Navbar;