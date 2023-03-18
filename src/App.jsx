import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Heading } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import { GameStoreProvider } from './contexts/GameStoreContext'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GameStoreProvider>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/catalogue" element={<ItemListContainer/>}/>
          <Route exact path="/category/:category" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </GameStoreProvider>
  )
}

export default App
