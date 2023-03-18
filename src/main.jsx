import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNyfs_VQD_iWAWChRJcL4M_4M60b9_-RY",
  authDomain: "proyecto-final-react-d131c.firebaseapp.com",
  projectId: "proyecto-final-react-d131c",
  storageBucket: "proyecto-final-react-d131c.appspot.com",
  messagingSenderId: "1018525655477",
  appId: "1:1018525655477:web:9f2b1766eac6e54c63f9fc"
};


initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>  
  </React.StrictMode>,
)
