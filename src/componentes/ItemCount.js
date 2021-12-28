import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    let [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    const agregar = () => {
        onAdd(contador);
        setContador(initial);
    }

    return (
        <>
            <div className="box-counter">
                <button className="btn btn-outline-secondary" onClick={restar}>-</button>
                <span className="numero">{contador}</span>

                <button className="btn btn-outline-secondary" onClick={sumar}>+</button>
                <div>
                    <button className="btn btn-danger" onClick={agregar}>Agregar</button>
                </div>
            </div>
        </>
    );
}
export default ItemCount;