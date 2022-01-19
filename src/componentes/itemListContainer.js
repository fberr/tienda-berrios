import React, { useState, useEffect } from "react";
import logoBlack from "../img/logo-destroy-negro.png";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from "react-router-dom";
// import listadoprod from '../listadoprod.json';
import {db} from "./firebase";
import {getDocs, query, collection, where} from "firebase/firestore";

console.log(db);
 





const ItemListContainer = (props) => {

    const {cat} = useParams();
    const [cantidad, setCantidad] = useState();
    const [datos, setDatos] = useState([]);
   
    const onAdd = (contador) => {
        console.log('producto agregado');
        console.log(contador);
        setCantidad(contador)
    }

    useEffect(() => {

        const productosCollection = collection(db, "productos")

        if (cat) {

            const consulta = query(productosCollection,where("categoria","==",cat))
            getDocs(consulta)
            .then(({ docs }) => {
                const confiltro = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setDatos(confiltro)
                console.log(confiltro)
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            getDocs(productosCollection)
                .then(({ docs }) => {
                    const sinfiltro = docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    setDatos(sinfiltro)
                    console.log(sinfiltro)
                })
                .catch((error) => {
                    console.log(error)
                })



        }

        // getDocs(productosCollection)
        //     .then((resultado) => {
        //         const docs = resultado.docs
        //         console.log(docs)
        //         const lista = docs.map((doc) => {
        //             const id = doc.id
        //             const data = doc.data()
        //             const producto = {
        //                 id : id,
        //                 ...data

        //             }
        //             return producto
        //         })

        //         console.log(lista);


        //         setDatos(lista)

               



        //     })

            

            // if(cat) {
            //     console.log('cat');
            //     const promises = () => {
            //         return new Promise((resolve,reject) => {
            //             setTimeout( () => resolve (
            //                 lista.filter(producto => producto.categoria === cat),
            //         ), 500 )
            //         })
            //     }
            //     promises().then(datos => setDatos(datos))
            
            // } else {
            //     setDatos(lista)
                
                // console.log('no cat')
                // const promises = () => {
                //     return new Promise((resolve,reject) => {
                //         setTimeout( () => resolve (listadoprod), 500
                //         )
                //     })
                // }
                // promises().then(datos => setDatos(datos))
            // }
            
       
    }, [cat])



    // console.log(listadoprod);

   

//    useEffect(() => { 
    
//         if(cat) {
//             console.log('cat');
//             const promises = () => {
//                 return new Promise((resolve,reject) => {
//                     setTimeout( () => resolve (
//                          listadoprod.filter(producto => producto.categoria === cat),
//                 ), 500 )
//                 })
//             }
//             promises().then(datos => setDatos(datos))
        
//         } else {
//             console.log('no cat')
//             const promises = () => {
//                 return new Promise((resolve,reject) => {
//                     setTimeout( () => resolve (listadoprod), 500
//                     )
//                 })
//             }
//             promises().then(datos => setDatos(datos))
//         }
//     }, [cat])

    // const [scroll, setScroll] = useState(false);
    //     useEffect(() => {
    //     document.addEventListener("click", () => {
    //         setScroll(true);
    //     });
    // }, []);

    function aqui() {
        console.log('this is:');
      }

    // useEffect(() => { 
    //     //  console.log(result);
    //       promises().then((datos)=> { 
              
    //           setDatos(datos);
    //       console.log(datos);
    //       }) 
    //   }, [cat])

    // toogle Class test con click
    const [isActive, setActive] = useState(false);

        const toggleClass = () => {
            setActive(!isActive);
        };

    return (
            <>
            {/* <div className={isActive ? 'activo': 'pasivo'} onClick={toggleClass} >holaaa</div> */}
            <div className="cuadro-bienvenida mb-5">
                {/* <img src={logoBlack} className="img-fluid logo-negro" /> */}
                <h2>{props.greeting}</h2>
            </div>

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
            {/* <ItemDetailContainer /> */}
        </>
        )
}

export default ItemListContainer;