import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore, collection, getDocs } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const gamesCollection = collection(db, "games");
    getDocs(gamesCollection).then((querySnapshot) => {
      const games = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(games);
    });
  }, []);


  return (
    <ItemDetail game={data}/>
  )
}

export default ItemDetailContainer
