import { 
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Center,
    Heading,
    Container,
    Spacer,
    Divider,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    HStack,
    Select,
    RadioGroup,
    Radio,
    FormHelperText,
    Stack,
    Skeleton,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from '@chakra-ui/react';
import {useState, useContext } from 'react'
import { CartContext } from '../contexts/GameStoreContext';
import { Form, Link } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';
import SendOrder from './SendOrder';     
import { useToast } from '@chakra-ui/react';

const Cart = () => {
    const [cart, setCart, removeItem, vaciarCarrito] = useContext(CartContext)
    
    const toast = useToast();

    const total = cart.reduce((acc,item) => {
        return acc + item.quantity * item.price;
    }, 0);

    const isVisible = (cart.length === 0) ? false : true ;

    return (
    <>
        <Center py="20px" bg="#B2F5EA">
            <Heading>Carrito</Heading>
        </Center>

        {isVisible && 
        <Center pt="20px">
             <TableContainer>
                <Table variant="simple" colorScheme="linkedin">
                    
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th >Cantidad</Th>
                            <Th >Precio</Th>
                            <Th >Total</Th>
                            <Th>Eliminar producto</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {cart.map((item) => {
                            return(
                                <Tr key={item.id}>
                                    <Td>{item.name}</Td>
                                    <Td>{item.quantity}</Td>
                                    <Td>${item.price}</Td>
                                    <Td>${parseFloat( item.price * item.quantity).toFixed(2)}</Td>
                                    <Td>
                                        <Center>
                                            <Button bg="#FC8181" onClick={() => {removeItem(item.id)}}>
                                                <DeleteIcon/>
                                            </Button>
                                        </Center>
                                    </Td>
                                </Tr>   
                            );
                        })}

                    </Tbody>


                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>Total: ${parseFloat(total).toFixed(2)} </Th>
                            <Th>
                                <Center>
                                    <Button bg="#E53E3E" onClick={() => {vaciarCarrito()}}>
                                        <DeleteIcon/>
                                    </Button>
                                </Center>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>            
        </Center>
        }
        
        {isVisible && <SendOrder/>}
        


        {!isVisible &&
            

            <Box p="50px">
                <Stack>
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                    <Skeleton height='20px' />
                </Stack>
                
                <Center py="50px">
                    <Alert
                    status='warning'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    maxW="900px"
                    >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            Nada por aqui!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm' pb="10px">
                            Visita nuestro catalogo, seguro encontrás lo que buscas!
                        </AlertDescription>

                        <Link to={`/catalogue`} >
                            <Button variant="solid" colorScheme="orange">
                                Ir a Catalogo
                            </Button>
                        </Link>
                    </Alert>
                </Center>
                
            </Box>
        }
    </>



)
}

export default Cart
