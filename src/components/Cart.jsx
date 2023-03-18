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

const Cart = () => {
    const [cart, setCart, removeItem, vaciarCarrito] = useContext(CartContext)

    const buttonStyle = {
        type:"submit",
        minW:"500px",
        variant:"custom",
        bg:"#38B2AC",
        ':hover':{
            bg:"#81E6D9"
        }
    }

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
        <Center pt="20px" bg="#E6FFFA">
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
            

        {isVisible &&    
        <Center bg="#E6FFFA">
            <Box minW="500px" mt="40px">
                <Center>
                    <Heading>
                        Formulario de compra
                    </Heading>
                </Center>
                
                <FormControl isRequired my="20px" autoComplete="off">
                    <FormLabel>Nombre y apellido</FormLabel>
                    <Input placeholder='Ingrese su nombre completo por favor' />
                </FormControl>

                <HStack/>

                <FormControl isRequired mb="20px" autoComplete="off">
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Ingrese direccion de correo electronico' />
                </FormControl>

                <FormControl isRequired mb="20px" autoComplete="off">
                    <FormLabel>Direccion</FormLabel>
                    <Input placeholder='Ingrese su direccion' />
                </FormControl>

                <FormControl mb="20px" autoComplete="off">
                    <FormLabel>Comentarios de direccion</FormLabel>
                    <Input placeholder='Referencias de su domicilio' />
                </FormControl>

                <FormControl mb="20px" autoComplete="off">
                    <FormLabel>Ciudad</FormLabel>
                    <Select placeholder='Seleccione la provincia'>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra del Fuego</option>
                        <option value="Tucumán">Tucumán</option>
                    </Select>
                </FormControl>

                <FormControl isRequired mb="20px" autoComplete="off">
                    <FormLabel>Codigo postal</FormLabel>
                    <Input placeholder='Ingrese CP' />
                </FormControl>

                <FormControl as='fieldset' mb="40px" autoComplete="off">
                    <FormLabel as='legend'>Metodo de pago</FormLabel>
                    <RadioGroup defaultValue='Efectivo'>
                        <HStack spacing='24px'>
                            <Radio value='Efectivo'>Efectivo</Radio>
                            <Radio value='Debito'>Debito</Radio>
                            <Radio value='Credito'>Credito</Radio>
                            <Radio value='Transferencia'>Transferencia bancaria</Radio>
    
                        </HStack>
                    </RadioGroup>
                    <FormHelperText>Seleccione el metodo de pago.</FormHelperText>
                </FormControl>

                <Button sx={buttonStyle} mb="20px">Finalizar compra</Button>
            </Box> 
        </Center>    
        }


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
                            Nada que comprar!
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
