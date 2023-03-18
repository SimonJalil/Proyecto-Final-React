import React from "react";
import { Button } from "@chakra-ui/react";
import {CheckCircleIcon} from "@chakra-ui/icons"
import { useContext } from "react";
import { CartContext } from "../contexts/GameStoreContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

    // Utilizo el Contexto
    const [cart, setCart] = useContext(CartContext);

    const cantidad = cart.reduce((acc,curr) => {
        return acc + curr.quantity;
    }, 0)

    return(
        <>
            <div className="cart">
                <Link to={`/cart`}>
                    <Button colorScheme="blue">
                    <i className="ri-shopping-cart-line"></i>
                        <span>
                            {cantidad}
                        </span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default CartWidget;