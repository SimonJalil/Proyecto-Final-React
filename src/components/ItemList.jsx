import React from 'react'
import { Container, Flex, SimpleGrid } from '@chakra-ui/react'
import Item from './Item'

const ItemList = ({games}) => {
  return (
    <>
      <SimpleGrid columns={5} minChildWidth="250px"  className="catalogo-principal">
        {games?.map((game) => (
          <Item 
            key={game.id}
            id={game.id}
            nombre={game.name}
            precio={game.price}
            categoria={game.category} 
            stock={game.stock}
            img={game.img}
          />
        ))}
      </SimpleGrid>

    </>
  )
}

export default ItemList
