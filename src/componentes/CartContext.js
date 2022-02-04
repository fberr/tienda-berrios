import { createContext, useState } from "react";

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const agregarProducto = (cantidades, producto) => {

        const nuevoProducto = { cantidades, producto }
        let idnuevo = nuevoProducto.producto['id']
        const copia = cart.slice(0);
        let repetido = copia.find(el => el.producto.id === idnuevo);

        if (repetido) {
            repetido.cantidades = repetido.cantidades + nuevoProducto.cantidades;
        } else {
            copia.push(nuevoProducto)
        }

        setCart(copia)
    }

    const borrarProducto = (itemId) => {
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