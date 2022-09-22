import React, { useState, useEffect } from "react";
import Card from "./Item";
import getItems from "../../services/mockAPI";

function ItemListContainer() {
  let [data, setData]= useState([])

useEffect(
  () =>{  getItems().then((respuestaDatos) => {
    setData(respuestaDatos)},
  []
)
  });

  return (
    <div>
      <h1>{}</h1>
      <div className="main container">
       {
       data.map((item)=>{
          console.log(item);
           return (
            <Card
              key={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
              detail={item.detail}
              stock={item.stock}
            />
          );

        })
       }
      </div>
    </div>
  );
}

export default ItemListContainer;
