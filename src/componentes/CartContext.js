import { createContext, useState, useEffect } from "react";
import { FileEarmarkSlides } from "react-bootstrap-icons";

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    

    const agregarProducto = (cantidades, producto) => {

        const nuevoProducto = { cantidades, producto }
        let idnuevo = nuevoProducto.producto['id']
        console.log(cart);
        const copia = cart.slice(0);

        let repetido = copia.find(el => el.producto.id === idnuevo);

        if (repetido) {
            console.log('hola repetido ' + repetido.cantidades);
            repetido.cantidades = repetido.cantidades + nuevoProducto.cantidades;
           
        } else {
            copia.push(nuevoProducto)
        }

        setCart(copia)
        console.log(producto)
        console.log(nuevoProducto.producto['id'])
        console.log(copia);
        console.log(cart);

        
       
       

    }


  


    
    const borrarProducto = (itemId) => {

        console.log(itemId)
        const copia2 = cart.slice(0);

        const borrado = copia2.filter(value => value.producto.id !== itemId)

        setCart(borrado)
    }

    const vaciar = () => {
        setCart([])
    }

    const valor_de_contexto = {
        cart: cart,
        agregarProducto: agregarProducto,
        borrarProducto: borrarProducto,
        vaciar: vaciar
    }

    return (
        <Provider value={valor_de_contexto}>
            {children}
        </Provider>
    )
}