import React from "react";
import { Cart } from 'react-bootstrap-icons';
import './CartWidget.css';

const CartWidget = () => {
    return (
            <>
                <div className="carro">
                    <Cart/><span>7</span>

                </div>
                

            </>
        )
}

export default CartWidget