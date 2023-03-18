import { createContext, useState } from "react";


// Incializamos el contexto
export const CartContext = createContext();

export const GameStoreProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // Funcion para remover item del carrito
    const removeItem = ((id) => {
        setCart(cart.filter((item) => item.id != id))
    });

    // Funcion para vaciar el carrito
    const vaciarCarrito = (() => {
        setCart([]);
    });

    return(
        <CartContext.Provider value={[cart, setCart, removeItem, vaciarCarrito]}>
            {children}
        </CartContext.Provider>
    )
}