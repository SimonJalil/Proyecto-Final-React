import { Center, Heading, Spacer, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Componente from './Componente'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
    const[games,setGames] = useState([]);
    // Obtengo parametro de categoria
    const { category } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const gamesCollection = collection(db, "games");
        getDocs(gamesCollection).then((querySnapshot) => {
            const games = querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
            setGames(games);
          });
    }, []);

    const catFiltro = games.filter((game) => game.category === category);
    
    return(
        <>
            {category ? <ItemList games={catFiltro}/> : <ItemList games={games}/>}
        </>
    );
};

export default ItemListContainer;