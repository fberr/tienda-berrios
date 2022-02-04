import React from "react";
import { Cart } from 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom';
import './CartWidget.css';
import { useContext } from 'react'
import { contexto } from '../CartContext'


const CartWidget = () => {

    const {cart} = useContext(contexto)
    const suma = cart.map(item => item.cantidades).reduce((a, b) => a + b, 0);
       
    return (
            <>
                <NavLink to="/carro" className="carro">
                    <Cart/><span> {cart.length ? suma : null }</span>
                </NavLink>
            </>
        )
}

export default CartWidget;