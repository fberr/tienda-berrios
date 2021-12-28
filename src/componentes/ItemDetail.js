import ItemCount from './ItemCount';
import { useState } from 'react';


const ItemDetail = ({ producto }) => {

    const [cantidad, setCantidad] = useState();
    const [mostrar, setMostrar] = useState(true);
    const [redirigir, setRedirigir] = useState();


    const onAdd = (contador) => {
        console.log('producto agregado');
        console.log(contador);
        setCantidad(contador);
        setMostrar(false);
        console.log(mostrar);
        redireccion(redirigir);
       
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
                    <p>Tu Carro tiene {cantidad ? cantidad : ' 0'} productos</p>

                    {mostrar != false 
                    ? 
                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} cantidad={cantidad} />
                    :  <p>Productos añadidos con éxito, serás redirigido al Carro de Compra!!</p>

                    }
                </div>
            </div>
        </>



    )
}
export default ItemDetail;