import React, { useState } from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';
import {Link, NavLink} from 'react-router-dom';


const Carrito = () => {
    const { cart, borrarProducto } = useContext(contexto)

    console.log(cart);
   


    


    const subtotal = cart.map(function (value) {

        return value.producto.price* value.cantidades; 
    
    });

   const total = subtotal.reduce((a, b) => a + b, 0);
       

   
    console.log(subtotal)
    console.log(total)

  

    return (
        <>
            <h1 style={{marginBottom:40}}>Tu Carro</h1>

            {cart.length === 0 ? 
            <>
                <h3>El carro esta vacio ;(</h3><br/>
                <Link to="/todos" className="btn btn-danger">Ir a Productos</Link>
            </>
            : 
            <>
                {cart.map(item => (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px dotted lightgrey',
                    padding:'13px 10px'}} key={item.producto.id} id={item.producto.id}>
                        <div>
                            <img src={item.producto.pictureUrl} style={{ width: 100 }} />
                        </div>
                        <div>
                            <p>Producto: {item.producto.name}</p>
                            <p>precio: {item.producto.price} </p>
                        </div>
                        <div> 
                            {/* <p>stock: {item.producto.stock}</p> */}
                            <p>categoria: {item.producto.categoria} </p></div>
                        <div>
                            <p>Cantidad: {item.cantidades} </p>
                        </div>
                        <div>
                            <button onClick={() => borrarProducto(item.producto.id)} className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>

                    ))}
                    <br/>
                    <div style={{float: 'right'}}>
                    <h3>Total: <span>{total}</span></h3>
                    </div>

            </>
            }

           
        </>
    )
}

export default Carrito;