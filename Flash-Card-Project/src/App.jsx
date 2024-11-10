import { useState } from 'react'
import Topbar from "./components/Topbar"
import Flashcard from "../src/components/Flashcard"
import Sidebar from "../src/components/Sidebar"
import CreateCard from './components/CreateCard/CreateCard'

function App() {
  const [isActive, setIsActive] = useState(1);
  const [deck, setDeck] = useState([
    {
        frontText: "What is the difference between var, let, and const",
        backText: `In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified.`,
        id: 1 
    },
    {
        frontText: "What is JavaScript?",
        backText: "JavaScript is a high-level, dynamic, and interpreted programming language used for web development to create interactive and dynamic content.",
        id: 2 
    },
    {
        frontText: "What are variables in JavaScript?",
        backText: "Variables are containers for storing data values. They can hold different types of data, such as numbers, strings, and objects.",
        id: 3 
    },
    {
        frontText: "What is a Promise in JavaScript?",
        backText: "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
        id: 4
    }
]);


  function nextCard(){
    if(isActive === deck.length){
      setIsActive(1);
    }
    else{
      setIsActive(isActive + 1);
    }
  }

  function save(currentDeck, event){
    event.preventDefault()
    setDeck(currentDeck);
}
  function addNewCard(event){
    event.preventDefault();
    setDeck(prevState=>{
      return([
        ...prevState,
        {frontText: "",
        backText: "",
        id: prevState.length + 1}
      ])
    })
  }
  function previousCard(){
    if(isActive === 1){
      setIsActive(deck.length)
    }
    else{
      setIsActive(isActive - 1);
    }
  }


  const displayCard = deck.map(card => {
           return <Flashcard 
              key = {card.id}
              frontText = {card.frontText}
              backText = {card.backText}
              isActive = {isActive === card.id ? "" : "invisible"}
              nextCard = {nextCard}
              previousCard = {previousCard}
            />      
    });
  
  return (
    <>
      <Topbar
        length={deck.length}
        activeCard = {isActive}
      />
      {displayCard}
      <CreateCard 
        length={deck.length}
        deck = {deck}
        save = {save}
        addNewcard = {addNewCard}
      />
    </>
  )
}

export default App
