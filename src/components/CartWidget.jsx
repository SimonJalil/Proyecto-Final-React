import React from "react";
import { Button } from "@chakra-ui/react";
import {CheckCircleIcon} from "@chakra-ui/icons"

const CartWidget = () => {
    return(
        <>
            <div className="cart">
                <Button colorScheme="blue">
                <i className="ri-shopping-cart-line"></i>
                    <span>
                        3
                    </span>
                </Button>
            </div>
        </>
    );
};

export default CartWidget;