import React from "react";
import { useState, useEffect } from "react";
import {getSingleItem} from "../../services/mockAPI"

function ItemDetail(){
    let [data, setData] = useState({});

    useEffect(() => {
      getSingleItem(1).then((respuestaDatos) => setData(respuestaDatos));
    }, []);

    return(
        <div>
            <div className="Item">
                <div className="ItemTitleDetail">
                    <h1>{data.title}</h1>
                    <h2>{data.price}</h2>
                </div>
                <div className="ItemImgDetail">
                    <img src={data.img} alt="" />
                </div>
                <div className="ItemDetailsDetail">
                    <p>{data.detail}</p>
                </div>

            </div>
        </div>
    )
}






export default ItemDetail;