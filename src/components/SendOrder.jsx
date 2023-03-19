import React from 'react'
import {
    Container,
    Heading,
    Stack,
    Input,
    Button,
    Text,
    Center,
    FormControl,
    FormLabel,
    Box,
    HStack,
    Select,
    RadioGroup,
    Radio,
    FormHelperText,
    List,
    ListItem,
    ListIcon,
    Spinner
  } from "@chakra-ui/react";
  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState, useContext } from "react";
  import { CartContext } from '../contexts/GameStoreContext';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { EmailIcon, ChatIcon, StarIcon, WarningIcon, CheckCircleIcon } from "@chakra-ui/icons";



const SendOrder = () => {

  // Estados de los campos del formulario
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [provincia, setProvincia] = useState("");
  const [cp , setCP] = useState("");
  const [metodoPago, setMetodoPago] = useState("");

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  // Uso de context
  const [cart, setCart, removeItem, vaciarCarrito] = useContext(CartContext)

  const total = cart.reduce((acc,item) => {
      return acc + item.quantity * item.price;
  }, 0);

  const getCurrentDate = (separator='-') => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
  }

  const buttonStyle = {
    mb:"20px",
    minW:"500px",
    variant:"custom",
    bg:"#38B2AC",
    ':hover':{
        bg:"#81E6D9"
    }
}

  // Funcion para almacenar el documento
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "" || email === ""){
      alert("No pueden existir campos vacios");
    }
    else{
      addDoc(ordersCollection, order).then(({id}) => enviarFormulario(id));
    }
    
    // Limpieza de campos
    // setName("");
    // setPhone("");
    // setEmail("");
    // setDireccion("");
    // setComentarios("");
    // setProvincia("");
    // setCP("");
    // setMetodoPago("");
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    buyer: {name: name, phone: phone, email: email}, 
    items: cart,
    date : getCurrentDate(),
    total: total
  }

  const enviarFormulario = (id) => {

    setOrderId(id);
    setLoading(true);  

    toast({
      title: 'Gracias por tu compra!',
      description:"En momentos recibira un mail con el detalle de la compra",
      status: 'success',
      position: 'top',
      duration: 5000,
      isClosable: true,
    });

    setTimeout(() => {
      setLoading(false);
      setCart([]);
    }, 5000) 
  }
 

  if(loading){
    return (
      <Container p={10}>

        <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Center>

        <Center>
        <List p={5}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
              Id de la orden: {orderId}
          </ListItem>
        </List>
        </Center>
      </Container>
    )
  }

  return ( 
    <Container>
      <Center>
          <Box minW="500px" mt="40px">
              <Center>
                  <Heading>
                      Formulario de compra
                  </Heading>
              </Center>

              <Container>

              <FormControl isRequired my="20px" autoComplete="off">
                <form onSubmit={handleSubmit}>
                  <FormLabel>Nombre y apellido</FormLabel>
                  <Input placeholder='Ingrese su nombre completo por favor' onChange={(e) => setName(e.target.value)} />

                  <FormLabel>Telefono</FormLabel>
                  <Input placeholder='Ingrese su numero telefonico por favor' type="number" onChange={(e) => setPhone(e.target.value)} />

                  <FormLabel>Email</FormLabel>
                  <Input placeholder='Ingrese direccion de correo electronico' onChange={(e) => setEmail(e.target.value)} />

                  <FormLabel>Direccion</FormLabel>
                  <Input placeholder='Ingrese su direccion' onChange={(e) => setDireccion(e.target.value)}/>

                  <FormLabel>Comentarios de direccion</FormLabel>
                  <Input placeholder='Referencias de su domicilio' onChange={(e) => setComentarios(e.target.value)}/>

                  <FormLabel>Ciudad</FormLabel>
                  <Select placeholder='Seleccione la provincia' onChange={(e) => setProvincia(e.target.value)}>
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

                  <FormLabel>Codigo postal</FormLabel>
                  <Input placeholder='Ingrese CP' onChange={(e) => setCP(e.target.value)}/>

                  <FormLabel as='legend'>Metodo de pago</FormLabel>
                  <RadioGroup defaultValue='Efectivo' onChange={(e) => setMetodoPago(e.target.value)}>
                      <HStack spacing='24px'>
                          <Radio value='Efectivo'>Efectivo</Radio>
                          <Radio value='Debito'>Debito</Radio>
                          <Radio value='Credito'>Credito</Radio>
                          <Radio value='Transferencia'>Transferencia bancaria</Radio>

                      </HStack>
                  </RadioGroup>
                  <FormHelperText>Seleccione el metodo de pago.</FormHelperText>

                  <Button sx={buttonStyle} type="submit">Finalizar compra</Button>
                </form>
                </FormControl>
            </Container>
          </Box> 
      </Center>  
    </Container>      
  )
}

export default SendOrder
