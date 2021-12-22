import React, { useState, useEffect } from "react";
import logoBlack from "../img/logo-destroy-negro.png";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from "react-router-dom";
import listadoprod from '../listadoprod.json';

// const misproductos = [
//     { id: 1, name: "Polera 1", price: 100 , stock : 10, categoria : "poleras"},
//     { id: 2, name: "Poleron 1", price: 200 , stock : 20, categoria : "polerones"},
//     { id: 3, name: "Accesorio 1", price: 300 , stock : 30, categoria : "accesorios"},
//     { id: 4, name: "Polera 2", price: 400 , stock : 40, categoria : "poleras"},
// ]

const ItemListContainer = (props) => {

    console.log(listadoprod);

    const {cat} = useParams();
    const [cantidad, setCantidad] = useState();
    const [datos, setDatos] = useState([]);
   
    const onAdd = (contador) => {
        console.log('producto agregado');
        console.log(contador);
        setCantidad(contador)
    }

   useEffect(() => { 
    
        if(cat) {
            console.log('cat');
            const promises = () => {
                return new Promise((resolve,reject) => {
                    setTimeout( () => resolve (
                         listadoprod.filter(producto => producto.categoria === cat),
                ), 500 )
                })
            }
            promises().then(datos => setDatos(datos))
        
        } else {
            console.log('no cat')
            const promises = () => {
                return new Promise((resolve,reject) => {
                    setTimeout( () => resolve (listadoprod), 500
                    )
                })
            }
            promises().then(datos => setDatos(datos))
        }
    }, [cat])

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