import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-container">
      <h2>{greeting}</h2>
      <p>Descubrí nuestra selección exclusiva de vinos y cervezas artesanales.</p>
    </div>
  );
};

export default ItemListContainer;
