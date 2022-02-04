import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {db} from "./firebase";
import {getDocs, query, collection, where} from "firebase/firestore";


const ItemListContainer = (props) => {

    const {cat} = useParams();
    const [datos, setDatos] = useState([]);
   
    useEffect(() => {
        const productosCollection = collection(db, "productos")
        if (cat) {
            const consulta = query(productosCollection,where("categoria","==",cat))
            getDocs(consulta)
            .then(({ docs }) => {
                const confiltro = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setDatos(confiltro)
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            getDocs(productosCollection)
                .then(({ docs }) => {
                    const sinfiltro = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    setDatos(sinfiltro)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [cat])

    return (
            <>
                <div className="cuadro-bienvenida mb-5">
                    <h2>{props.greeting} {cat}</h2>
                </div>
                {datos.length === 0 ? (
                    <>  
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </>
                ) : (
                    <ItemList data={datos} />
                )}
            </>
        )
}

export default ItemListContainer;