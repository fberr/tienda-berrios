import React from "react";
import { Cart } from 'react-bootstrap-icons';
import {Link, NavLink} from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    return (
            <>
                <NavLink to="/carro" className="carro">
                    <Cart/><span>7</span>

                </NavLink>
                

            </>
        )
}

export default CartWidget