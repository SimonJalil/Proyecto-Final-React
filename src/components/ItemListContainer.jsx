import { Center, Heading, Spacer, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Componente from './Componente'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { category } = useParams();

    const datos = [
        {id: 1, nombre: "Producto 1", precio: 49.99, stock: 5},
        {id: 2, nombre: "Producto 2", precio: 39.99, stock: 5},
        {id: 3, nombre: "Producto 3", precio: 130, stock: 3},
        {id: 4, nombre: "Producto 4", precio: 200, stock: 6},
        {id: 5, nombre: "Producto 5", precio: 100, stock: 2},
    ];
    
    /* const getDatos = () => {
        return new Promise((resolve, reject) => {
            if(datos.length == 0){
                reject(new Error("No hay datos para mostrar"));
            }
            setTimeout(() => {
                resolve (datos);
            }, 3000);
        });
    }

    async function fetchingData(){
        try{
            const datosFetched = await getDatos();
            console.log(datosFetched);
        }
        catch(err){ 
            console.log(err);
        }
    };

    fetchingData(); */

    const getProducts = async () => {
        const response = await fetch("../../datos.json");
        //console.log(response);

        const data = await response.json();
        //console.log(data);

        return data;
    }

    const [product, setProduct] = useState([]);
    //console.log(product);
    
    useEffect(()=>{
        getProducts().then((product) => setProduct(product));
    },[]);

    //getProducts();
    
    const catFiltro = product.filter((game) => game.category === category);

    return(
        <>
            {category ? <ItemList games={catFiltro}/> : <ItemList games={product}/>}
        </>
    );
};

export default ItemListContainer;