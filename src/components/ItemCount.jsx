import React from 'react'
import { useState } from 'react';
import { 
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({stock, id, price, name}) => {

  const [count, setCount] = useState(1);

  const sumarCount = () => {
    setCount(count + 1);
  }

  const restarCount = () => {
    setCount(count - 1); 
  }

  return (
    <>
      <ButtonGroup>
        {count <= 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={restarCount} />
        )}

        <Center>
          <Button
            variant="solid"
            colorScheme="blue"
          >
            Add to cart: {count}
          </Button>
        </Center>

        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={sumarCount} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
        
      </ButtonGroup>
    </>
  )
}

export default ItemCount
