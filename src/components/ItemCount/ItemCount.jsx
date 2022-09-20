import React, { useState, useEffect } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

  const [contador, setContador] = useState(initial)

  const sumar = () => {
      if(contador < stock){
          setContador(contador + 1)}
  }
  const restar = () => {
      if(contador > 0){
      setContador(contador - 1)}
  }
  
  const confirmar = () => {
      if(contador <= stock && contador !== 0){
          alert("Se agregaron al carrito " + contador + " productos")
      }        
  }
  

  return (      
      <div id="onAdd">
          <p id="tituloProducto">Tus productos</p>
          <div id="onAddInterno">
              <button id="boton" onClick={restar}>-</button>
              <p id="parrafo">{contador}</p>
              <button id="boton" onClick={sumar}>+</button>
          </div>
          <button id="botonCarrito" onClick={confirmar}>Agregar al carrito</button>
      </div>
  )

}

export default ItemCount
