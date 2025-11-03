import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="🍷 ¡Bienvenido a Drink’s Tuc! 🍺" />
    </>
  );
}

export default App;
