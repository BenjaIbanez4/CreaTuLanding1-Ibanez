import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Drink’s Tuc</h1>
      <ul className="menu">
        <li>Inicio</li>
        <li>Vinos</li>
        <li>Cervezas</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
