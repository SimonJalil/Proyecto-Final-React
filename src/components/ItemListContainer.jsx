import { Center, Heading, Spacer } from "@chakra-ui/react";
import Componente from './Componente'

const ItemListContainer = () => {
    return(
        <div>
            
            <Center>
                <Heading>
                    Bienvenido a Game Store!
                </Heading>
            </Center>
            
            <Componente greeting="Componente 1"/>
            
        </div>
    );
};

export default ItemListContainer;