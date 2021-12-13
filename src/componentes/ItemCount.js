import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, cantidad }) => {
 let [contador, setContador] = useState(initial);

const sumar = () => { 
     if (contador < stock ) { 
         setContador(contador + 1); 
        } 
    }
const restar = () => { 
     if (contador > 1) { 
         setContador(contador -1); 
        } 
    } 
const agregar = () => { 
    if ((contador > 0) && (stock > 0) ){ 
        onAdd(contador) 
    }
}

 return ( 
    <> 
        <br></br>
        <button  className="btn btn-secondary" onClick={restar}>-</button> 
        <span  className="btn btn-outline-danger">{contador}</span> 
        <button  className="btn btn-secondary" onClick={sumar}>+</button> 
        <button  className="btn btn-danger" onClick={agregar}>Agregar</button>
        <div>Agregado al carro: <span className="cantidad">{cantidad} </span> </div> 
    </>
);}
export default ItemCount;