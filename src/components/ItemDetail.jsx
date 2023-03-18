import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCounter from './ItemCount'
import { 
    Center,
    Card,
    CardBody,
    Stack,
    Heading,
    Divider, 
    CardFooter,
    Text,
    Image
}from '@chakra-ui/react'
import ItemCount from './ItemCount';

import { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetail = ({game}) => {

  const {id} = useParams();
  console.log(id);

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const biciRef = doc(db, "games", `${id}`);
    
    getDoc(biciRef).then((snapshot) => {
      if(snapshot.exists()){
        setProducto(snapshot.data());
        console.log(producto);
      }
      else{
        console.log("No hay documento!");
      }
    });
  }, []);

  return (
    <>
      {game.map((game) => (
        <div key={game.id}>
          <Center p="1rem">
            <Card className="card-principal">
              <CardBody>
              <Image src={game.img} alt='Game image' />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{game.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripción: {game.description}
                  </Text>
                  <Text color="blue.300" fontSize="l">
                    Categoría: {game.category}
                  </Text>
                  <Text color="red.500" fontSize="xl">
                    Stock: {game.stock}
                  </Text>
                  <Text color="green.500" fontSize="xl">
                    Precio: U$D {game.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={game.stock}
                  id={game.id}
                  price={game.price}
                  name={game.name}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  )
}

export default ItemDetail
