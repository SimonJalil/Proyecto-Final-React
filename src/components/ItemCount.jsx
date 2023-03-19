import React, { useContext } from 'react'
import { useState } from 'react';
import { 
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
  Toast
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from '../contexts/GameStoreContext';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const ItemCount = ({stock, id, price, name}) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [addItem, setAddItem] = useState(false); 

  const toast = useToast();

  const sumarCount = () => {
    setCount(count + 1);
  }

  const restarCount = () => {
    setCount(count - 1); 
  }

  const incluirCarrito = () => {
    setCart((items) => {
      const itemEsta = items.find((item) => item.id === id);
      if(itemEsta){
        return items.map((item) => {
          if(item.id === id) {
            return{...item, quantity: item.quantity + count};
          } else{
            return item;
          }
        })
      } else{
        return[...items, {id, quantity: count, price, name}];
      }
    });
    setAddItem(true);
    
    toast({
      title: 'Agregado al carrito!',
      description: "Completa el formulario de compra para finalizar.",
      status: 'info',
      position: 'top',
      duration: 5000,
      isClosable: true,
    });

    localStorage.setItem("carrito", JSON.stringify(cart));
  }  
  

  return (
    <>

      {!addItem &&
        <ButtonGroup>
          {count <= 1 ? (
            <Tooltip label="Stock mínimo alcanzado" placement="bottom">
              <IconButton icon={<MinusIcon />} isDisabled />
            </Tooltip>
          ) : (
            <IconButton icon={<MinusIcon />} onClick={restarCount} />
          )}

          <Center>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {incluirCarrito()}}
            >
              Añadir a carrito: {count}
            </Button>
          </Center>

          {count < stock ? (
            <IconButton icon={<AddIcon />} onClick={sumarCount} />
          ) : (
            <Tooltip label="Stock máximo alcanzado" placement="bottom">
              <IconButton icon={<AddIcon />} isDisabled />
            </Tooltip>
          )}
          
        </ButtonGroup>
      }

      {addItem && 
        <Center>
          <Link to={`/cart`}>
            <Button
              variant="solid"
              colorScheme="orange"
            >
              Finalizar compra
            </Button>
          </Link>
      </Center>
      }
    </>
  )
}

export default ItemCount
