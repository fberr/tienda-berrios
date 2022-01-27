import React, { useState } from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';
import { Link, NavLink } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import CartForm from "./CartForm";


const Carrito = () => {
    const { cart, borrarProducto, vaciar } = useContext(contexto)

    const [finalizado, setFinalizado] = useState(false);

    console.log(finalizado)


    const finalizarCompra = () => {
        console.log('guardando la compra en la db ');

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            buyer: {
                name: "Felipe",
                lastName: "Berrios",
                email: "felipe@test.cl"
            },
            items: cart,
            date: serverTimestamp(),
            total: total

        })
            .then((resultado) => {
                setFinalizado(true);
                console.log(resultado);
                vaciar();
            })

        console.log(finalizado);
    }

    console.log(cart);

    const subtotal = cart.map(function (value) {

        return value.producto.price * value.cantidades;

    });

    const total = subtotal.reduce((a, b) => a + b, 0);

    console.log(subtotal)
    console.log(total)

    return (
        <>
            <h1 style={{ marginBottom: 40 }}>Tu Carro</h1>
            <CartForm></CartForm>

            {finalizado === true ?
                <>
                    <h3>Felicidades !!</h3>
                    <h4 style={{ marginBottom: '30px' }}>Tu compra se ha realizado con éxito</h4>
                    <Link to="/" className="btn btn-danger">Volver al Home</Link>
                </>
                :
                <>
                    {cart.length === 0 ?
                        <>
                            <h3>El carro esta vacio ;(</h3><br />
                            <Link to="/todos" className="btn btn-danger">Ir a Productos</Link>
                        </>
                        :
                        <>
                            {cart.map(item => (
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px dotted lightgrey',
                                    padding: '13px 10px'
                                }} key={item.producto.id} id={item.producto.id}>
                                    <div>
                                        <img src={item.producto.pictureUrl} style={{ width: 100 }} />
                                    </div>
                                    <div>
                                        <p>Producto: {item.producto.name}</p>
                                        <p>precio: {item.producto.price} </p>
                                    </div>
                                    <div>
                                        <p>categoria: {item.producto.categoria} </p></div>
                                    <div>
                                        <p>Cantidad: {item.cantidades} </p>
                                    </div>
                                    <div>
                                        <button onClick={() => borrarProducto(item.producto.id)} className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>

                            ))}
                            <br />
                            <button onClick={() => vaciar()} style={{ float: 'left' }} className="btn btn-outline-danger">Borrar todo</button>
                            <div style={{ float: 'right' }}>
                                <h3 style={{ marginBottom: "30px" }}>Total: <span>{total}</span></h3>
                                <button onClick={finalizarCompra} className="btn btn-dark">FINALIZAR COMPRA</button>
                            </div>
                        </>
                    }
                </>
            }
        </>
    )
}

export default Carrito;