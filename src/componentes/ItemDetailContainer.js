import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"
import listadoprod from '../listadoprod.json';

// const getItem = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout( () => resolve (
            

//             [
//             {
//                 id: '1',
//                 name: 'Polera Black Goat',
//                 pictureUrl: 'https://www.delmalclothing.cl/wp-content/uploads/2021/06/goat.png',
//                 description: 'Polera manga corta negra Black Goat',
//                 price: 12000,
    
//             },
//             {
//                 id: '2',
//                 name: 'Polera Ready to Die',
//                 pictureUrl: 'https://www.delmalclothing.cl/wp-content/uploads/2021/06/remix.png',
//                 description: 'Polera manga corta negra Ready to Die',
//                 price: 13000,
//             },
//             {
//                 id: '3',
//                 name: 'Polera Kali',
//                 pictureUrl: 'https://www.delmalclothing.cl/wp-content/uploads/2021/06/kali.png',
//                 description: 'Polera manga corta negra Kali',
//                 price: 10000,
//             }
//        ]
//        ), 2000
//         )
//     })
// }





const ItemDetailContainer = () => {

    


    const hola = [
        {
            id: '1',
            name: 'uno'
        },
        {
            id: '2',
            name: 'doce'
        }
    ]


     console.log(listadoprod);
     console.log(hola);

    
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    




    useEffect(() => { 

        const getItem = () => {
            return new Promise((resolve,reject) => {
                resolve ( listadoprod)
               
            })
        }
       

        
        if (id) {
            console.log("Aca pediria solo el detalle del producto con id: " + id)
            getItem().then((produ)=> { 

                let resultado = produ.find(el => el.id === id);
                setProducto(resultado);
                // console.log(producto);
                console.log(id);
                console.log(resultado);


            }) 



        }
        else {
            console.log("Aca pediria todos los productos");
            getItem().then((producto)=> { 

                let resultado = producto
                setProducto(resultado);
                
            }) 

        }
        
    }, [id])


    return (
        <>
            {producto.length === 0 ? (
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