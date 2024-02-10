import React from "react";
// import './App.css'
import Navbar from "./pages/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import LandingSection from "./pages/LandingSection";
import { AlertProvider } from "./context/AlertContext";

function App() {
  return (
    <ChakraProvider>
    <AlertProvider>
      <main>
        <Navbar/>
        <LandingSection/>
      </main>
    </AlertProvider>
  </ChakraProvider>
  )
}

export default App
