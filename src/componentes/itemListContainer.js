import React, { useState, useEffect } from "react";
import logoBlack from "../img/logo-destroy-negro.png";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const promises = () => {
    return new Promise((resolve,reject) => {
        setTimeout( () => resolve ([
            {
                id: '1',
                name: 'Polera Black Goat',
                pictureUrl: 'https://www.delmalclothing.cl/wp-content/uploads/2021/06/goat.png',
                description: 'Polera manga corta negra Black Goat',
                price: 12000,
    
            },
            {
                id: '2',
                name: 'Polera Ready to Die',
                pictureUrl: 'https://www.delmalclothing.cl/wp-content/uploads/2021/06/remix.png',
                description: 'Polera manga corta negra Ready to Die',
                price: 13000,
            },
            {
                id: '3',
                name: 'Polera Kali',
                pictureUrl: 'https://www.delmalclothing.cl/wp-content/uploads/2021/06/kali.png',
                description: 'Polera manga corta negra Kali',
                price: 10000,
            }
       ]), 2000
        )
    })
}

const ItemListContainer = (props) => {

    const [cantidad, setCantidad] = useState();
    const [datos, setDatos] = useState([]);

    const onAdd = (contador) => {
        console.log('producto agregado');
        console.log(contador);
        setCantidad(contador)
    }


    useEffect(() => { 
        promises().then((datos)=> { 
            setDatos(datos);
            console.log(datos);
        }) 
    }, [])




    return (
            <>
            {/* <div className="cuadro-bienvenida mb-5">
                <img src={logoBlack} className="img-fluid logo-negro" />
                <h2>{props.greeting}</h2>
            </div> */}

            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} cantidad={cantidad} /> */}

            {datos.length === 0 ? (
                <>
                    <p>loading</p>
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

export default ItemListContainer