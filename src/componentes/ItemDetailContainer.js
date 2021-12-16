import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail'

const getItem = () => {
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

const ItemDetailContainer = () => {
    const idSelect = '2';
    const [producto, setProducto] = useState([]);


    useEffect(() => { 
        getItem().then((producto)=> { 

            let resultado = producto.find(test => test.id === idSelect)
            setProducto(resultado);
            console.log(resultado);
        }) 
    }, [])


    return (
        <>
            {producto.length === 0 ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
               
            ) : (
                <ItemDetail producto={producto}/>
            )}
        </>
        


    )
}
export default ItemDetailContainer;