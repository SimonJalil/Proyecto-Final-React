import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const {id} = useParams();

  const getProducts = async () => {
    const response = await fetch("../../datos.json");
    const data = await response.json();
    return data;
  }

  const [game, setGame] = useState([]); 

  useEffect(()=>{
      getProducts().then((game) => setGame(game));
  },[]);

  const gameFilter = game.filter((game) => game.id === Number(id));

  return (
    <ItemDetail game={gameFilter}/>
  )
}

export default ItemDetailContainer
