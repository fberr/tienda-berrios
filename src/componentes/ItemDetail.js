import ItemCount from './ItemCount';
import { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { contexto } from './CartContext';


const ItemDetail = ({ producto }) => {

    // const {push} = useHistory()
    const { agregarProducto } = useContext(contexto)

    const [cantidad, setCantidad] = useState();
    const [mostrar, setMostrar] = useState(true);
    const [redirigir, setRedirigir] = useState();


    const onAdd = (contador) => {
        console.log('producto agregado');
        console.log(contador);
        setCantidad(contador);
        setMostrar(false);
        console.log(mostrar);
        agregarProducto(contador, producto)
       // redireccion(redirigir);
       
    }

    const redireccion = () => { 
        setRedirigir(
            setTimeout(() => {
            window.location.href = '/carro';
            
            }, 2000)
        );
       
       }

  return (

        <>
            <div className="row">
                <div className="col-lg-6">
                    <img src={producto.pictureUrl} className="img-fluid" />
                </div>
                <div className="col-lg-6 text-start">
                    <h2>{producto.name}</h2>
                    <p style={{ fontFamily: 'Arial' }}>stock: {producto.stock}</p>
                    <hr />
                    <h5 className="mt-4">PRECIO: ${producto.price}</h5>
                    {/* <p>Tu Carro tiene {cantidad ? cantidad : ' 0'} productos</p> */}

                    {mostrar != false 
                    ? 
                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} cantidad={cantidad} />
                    :  <p>Productos añadidos con éxito!!</p>

                    }
                </div>
            </div>
        </>



    )
}
export default ItemDetail;