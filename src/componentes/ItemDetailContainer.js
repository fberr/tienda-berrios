import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"
import {db} from "./firebase";
import {collection, doc, getDoc} from "firebase/firestore";


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => { 
        
        const productosCollection = collection(db, "productos")
        const refDoc = doc(productosCollection, id)
        getDoc(refDoc)
            .then((resul) => {
                const nuevoProducto = ({ id: resul.id, ...resul.data() })
                setProducto(nuevoProducto)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [id])

    return (
        <>
            {producto && producto.name ? (
                <ItemDetail producto={producto}/>
            ) : ( 
                <>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </>
              )
            }  
        </>
    )
}
export default ItemDetailContainer;