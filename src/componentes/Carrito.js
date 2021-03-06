import React, { useState } from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';
import { Link } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import CartForm from "./CartForm";


const Carrito = () => {
    
    const { cart, borrarProducto, vaciar} = useContext(contexto)
    const [finalizado, setFinalizado] = useState(false);
    const [showOrder, setshowOrder] = useState();
    
    const finalizarCompra = (campos) => {
        
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            buyer: campos,
            items: cart,
            date: serverTimestamp(),
            total: total

        })
            .then((resultado) => {
                setFinalizado(true);
                setshowOrder(resultado.id)
                vaciar();
            })
    }

    const subtotal = cart.map(function (value) {
        return value.producto.price * value.cantidades;
    });

    const total = subtotal.reduce((a, b) => a + b, 0);
    
return (
        <>
            {finalizado === true ?
                <>
                    <h2>Felicidades !!</h2>
                    <h4 style={{ marginBottom: '30px' }}>Tu compra se ha realizado con éxito</h4>
                    <h5 style={{ marginBottom: '30px' }}>Tu id de orden de compra es: {showOrder}</h5>
                    <Link to="/" className="btn btn-danger">Volver al Home</Link>
                </>
                :
                <>
                    <h1 style={{ marginBottom: 40 }}>Tu Carro</h1>
                    {cart.length === 0 ?
                        <>
                            <h3>El carro esta vacio ;(</h3><br />
                            <Link to="/todos" className="btn btn-danger" style={{marginBottom: '80px'}}>Ir a Productos</Link>
                        </>
                        :
                        <>
                           {cart.map(item => (
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px dotted lightgrey',
                                    padding: '13px 10px'
                                }} key={item.producto.id} id={item.producto.id}>
                                    <div>
                                        <p>{item.producto.name}</p>
                                        <img src={item.producto.pictureUrl} style={{ width: 100 }} alt={item.producto.name} />
                                    </div>
                                    <div>
                                        
                                        <div>Precio: {item.producto.price} </div>
                                        <div>categoria: {item.producto.categoria} </div>
                                    </div>
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
                                
                            </div>
                            <div style={{ clear: 'both' }}>
                                <CartForm finalizarCompra={finalizarCompra} /> 
                            </div>
                        </>
                    }
                </>
            }
        </>
    )
}

export default Carrito;