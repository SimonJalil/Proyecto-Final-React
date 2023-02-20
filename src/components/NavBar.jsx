import { 
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  HStack
 } from '@chakra-ui/react'
import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import imagen from '../assets/images/favicon/apple-icon-144x144.png'

const Navbar = () => {
  return (
    
    <Flex as="nav" p="10px" alignItems="center" gap="10px" bg="green.200">
        
        <Link to="/"> 
            {/* <Avatar name="logo" src='https://cdna.artstation.com/p/assets/images/images/047/762/748/large/xplayerdx-kratos-1.jpg?1648395537'/> */}
            <Avatar name="logo" src={imagen}/>
        </Link>
        
        <Link to={"/"}>
            <Heading as="h1">Game Store</Heading>
        </Link>
        <Spacer/>

        <Link to={"/catalogue"}>
            <Button>
                Catalogo
            </Button>
        </Link>

        <Menu>
            <MenuButton
            px={4}
            py={2}
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}>
            Categorias
            </MenuButton>
            <MenuList>
                <Link to={`/category/${"action"}`}>
                    <MenuItem>Acción</MenuItem>
                </Link>

                <Link to={`/category/${"sports"}`}>
                    <MenuItem>Deporte</MenuItem>
                </Link>

                <Link to={`/category/${"shooting"}`}>
                    <MenuItem>Shotting</MenuItem>
                </Link>
                
                <Link to={`/category/${"adventure"}`}>
                    <MenuItem>Aventura</MenuItem>
                </Link>
            </MenuList>
        </Menu>
        
        <CartWidget/>

        
    </Flex>
    
  )
}

export default Navbar
