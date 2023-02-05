import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Heading } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  )
}

export default App
