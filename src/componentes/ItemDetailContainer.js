import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"
// import listadoprod from '../listadoprod.json';
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
                console.log(resul.id)
                const nuevoProducto = ({ id: resul.id, ...resul.data() })
                console.log(nuevoProducto)
                
                setProducto(nuevoProducto)
            })
            .catch((error) => {

            })

        
    }, [id])


    return (
        <>
            {producto.length == 0 ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
               
            ) : ( 
                <ItemDetail producto={producto}/>
              )
            }  
        </>
        


    )
}
export default ItemDetailContainer;