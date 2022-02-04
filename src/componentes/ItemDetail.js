import ItemCount from './ItemCount';
import { useState } from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';
import {Link} from 'react-router-dom';


const ItemDetail = ({ producto }) => {

    const { agregarProducto } = useContext(contexto)
    const [cantidad, setCantidad] = useState();
    const [mostrar, setMostrar] = useState(true);
    
    const onAdd = (contador) => {
       
        setCantidad(contador);
        setMostrar(false);
        agregarProducto(contador, producto)
    }

  return (

        <>
            <div className="row">
                <div className="col-lg-6">
                    <img src={producto.pictureUrl} className="img-fluid" alt={producto.name} />
                </div>
                <div className="col-lg-6 text-start">
                    <h2>{producto.name}</h2>
                    <p style={{ fontFamily: 'Arial' }}>stock: {producto.stock}</p>
                    <hr />
                    <h5 className="mt-4">PRECIO: ${producto.price}</h5>
                    {mostrar ? 
                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} cantidad={cantidad} />
                    :  
                        <>
                            <p>Productos añadidos con éxito!!</p>
                            <Link to="/carro" className="btn btn-danger">Ir a mi Carro</Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default ItemDetail;