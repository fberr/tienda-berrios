import React from "react";
import { Cart } from 'react-bootstrap-icons';
import {Link, NavLink} from 'react-router-dom';
import './CartWidget.css';
import { useContext } from 'react'
import { contexto } from '../CartContext'


const CartWidget = () => {
    const {cart, agregarProducto} = useContext(contexto)

    console.log(cart)
    
 
  
        const suma = cart.map(item => item.cantidades).reduce((a, b) => a + b, 0);
        console.log(suma);

   


    return (
            <>
                <NavLink to="/carro" className="carro">
                    <Cart/><span> {cart.length ? suma : null }</span>

                </NavLink>
                

            </>
        )
}

export default CartWidget