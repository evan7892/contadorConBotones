import React, { useState, useEffect } from "react";
import getSingleItem from "../../services/mockAPI";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    getSingleItem().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className="main container">
        <ItemDetail>
            title= {data.title}
            price={data.price}
            detail={data.detail}
            img= {data.img}
            </ItemDetail> 
        
      </div>
    </div>
  );
}

export default ItemDetailContainer;