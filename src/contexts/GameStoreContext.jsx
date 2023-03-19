import { createContext, useState } from "react";
import { useToast } from '@chakra-ui/react';


// Incializamos el contexto
export const CartContext = createContext();

export const GameStoreProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const toast = useToast();

    // Funcion para remover item del carrito
    const removeItem = ((id) => {
        setCart(cart.filter((item) => item.id != id))
        toast({
            title: 'Item eliminado del carrito',
            status: 'error',
            position: 'top',
            duration: 5000,
            isClosable: true,
          })
    });

    // Funcion para vaciar el carrito
    const vaciarCarrito = (() => {
        setCart([]);
        toast({
            title: 'Carrito Vaciado.',
            status: 'error',
            position: 'top',
            duration: 5000,
            isClosable: true,
          })
    });

    return(
        <CartContext.Provider value={[cart, setCart, removeItem, vaciarCarrito]}>
            {children}
        </CartContext.Provider>
    )
}