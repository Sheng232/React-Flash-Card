import { useState } from 'react'
import Navbar from "../src/components/Navbar"
import Flashcard from "../src/components/Flashcard"
function App() {


  return (
    <>
      <Navbar/>
      <Flashcard 
        frontText = "What is the difference between var, let, and const"
        backText = 
        {`In JavaScript, var is function-scoped and can be re-declared; let 
        and const are block-scoped, with let allowing re-assignment and const preventing it. 
        However, const objects can have their contents modified.
        `}/>
    </>
  )
}

export default App
