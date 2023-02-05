import { Flex, Box, Text, Button, Heading, Spacer, HStack, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    
    <Flex as="nav" p="10px" alignItems="center" gap="10px" bg="green.200">
        <Avatar name="logo" src='https://cdna.artstation.com/p/assets/images/images/047/762/748/large/xplayerdx-kratos-1.jpg?1648395537'></Avatar>
        <Heading as="h1">Game Store</Heading>
        <Spacer/>


        <HStack spacing="20px">
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
                Menú
                </MenuButton>
                <MenuList>
                    <MenuItem>Productos</MenuItem>
                    <MenuItem>Los mas vendidos</MenuItem>
                    <MenuItem>Contacto</MenuItem>
                    <MenuItem>Unete a nosotros!!!</MenuItem>
                    <MenuItem>Cotiza con nosotros</MenuItem>
                </MenuList>
            </Menu>

            <Text>
                simonjalilcruz@gmail.com
            </Text>

            <Button>
                Logout
            </Button>

            <CartWidget/>
        </HStack>
        
    </Flex>
    
  )
}

export default Navbar
