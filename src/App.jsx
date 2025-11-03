import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
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
