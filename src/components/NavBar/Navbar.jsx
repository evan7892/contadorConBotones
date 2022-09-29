import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Navbar () {
    return(
        <div className="navBar">
            <CartWidget/>
        <nav>
        <ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/category/:categoryProducto">Productos</Link></li>
		<li><Link to="/category/ofertas">Oferta</Link></li>
	 </ul>
    </nav>
    </div>

  )
}


  export default Navbar;

  