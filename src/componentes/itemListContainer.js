import React, { useState } from "react";
import logoBlack from "../img/logo-destroy-negro.png";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";


const ItemListContainer = (props) => {

    const [cantidad, setCantidad] = useState()

    const onAdd = (contador) => {
        console.log('producto agregado');
        console.log(contador);
        setCantidad(contador)
    }

    return (
            <>
            <div className="cuadro-bienvenida">
                <img src={logoBlack} className="img-fluid logo-negro" />
                <h2>{props.greeting}</h2>
            </div>

            <ItemCount stock={5} initial={1} onAdd={onAdd} cantidad={cantidad} />

        </>
        )
}

export default ItemListContainer