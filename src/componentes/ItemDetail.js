import ItemCount from './ItemCount';
import {useState} from 'react';




const ItemDetail = ({producto}) => {

    const [cantidad, setCantidad] = useState();
    const onAdd = (contador) => {
        console.log('producto agregado');
        console.log(contador);
        setCantidad(contador)
    }

    
    return ( 

        <>
            <div className="row">
                <div className="col-lg-6">
                    <img src={producto.pictureUrl} className="img-fluid"/>
                </div>
                <div className="col-lg-6 text-start">
                     <h2>{producto.name}</h2>
                    <p style={{fontFamily:'Arial'}}>stock: {producto.stock}</p>
                    <hr/>
                    <h5 className="mt-4">PRECIO: ${producto.price}</h5> 
                    <ItemCount stock={5} initial={1} onAdd={onAdd} cantidad={cantidad} /> 
                    
                </div>
            </div>
        </>

    

        )
}
export default ItemDetail;