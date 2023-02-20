import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Heading } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/catalogue" element={<ItemListContainer/>}/>
        <Route exact path="/category/:category" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
