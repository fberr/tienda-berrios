import React, { useState } from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';


const Carrito = () => {
    const { cart, borrarProducto } = useContext(contexto)

    console.log(cart);

    return (
        <>
            <h1 style={{marginBottom:40}}>Tu Carro</h1>

            {cart.map(item => (

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} key={item.producto.id} id={item.producto.id}>
                    <div>
                        <img src={item.producto.pictureUrl} style={{ width: 100 }} />
                    </div>
                    <div>
                        <p>Producto: {item.producto.name}</p>
                        <p>precio: {item.producto.price} </p>
                    </div>
                    <div> <p>stock: {item.producto.stock}</p>
                        <p>categoria: {item.producto.categoria} </p></div>
                    <div>
                        <p>Cantidad: {item.cantidades} </p>
                    </div>
                    <div>
                        <button onClick={() => borrarProducto(item.producto.id)} className="btn btn-danger">Eliminar</button>
                    </div>
                </div>

            ))}
        </>
    )
}

export default Carrito;