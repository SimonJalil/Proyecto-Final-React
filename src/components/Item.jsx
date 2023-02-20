import React from 'react'
import {
    Container, 
    Card,
    CardBody,
    Stack,
    Heading,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Center,
    Text,
    Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio, categoria, stock, img}) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-principal">
            <CardBody>
              <Image src={img} alt='Game image' />
              <Stack mt="6" spacing="3">
                <Heading size="md">{nombre}</Heading>

                <Text color="blue.800" fontSize="l">
                  Category: {categoria}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Precio: {precio}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">

                <Link to={`/item/${id}`}>
                  <Button variant="solid" colorScheme="blue">
                    Detalles
                  </Button>
                </Link>
                
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  )
}

export default Item
