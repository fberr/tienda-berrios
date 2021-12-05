import React from "react";
import logoBlack from "../img/logo-destroy-negro.png";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    return (
            <>
            <div className="cuadro-bienvenida">
                <img src={logoBlack} className="img-fluid logo-negro" />
                <h2>{props.greeting}</h2>
            </div>

        </>
        )
}

export default ItemListContainer