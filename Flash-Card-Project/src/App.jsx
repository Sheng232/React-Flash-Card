import { useState } from 'react'
import Topbar from "./components/Topbar"
import Flashcard from "../src/components/Flashcard"
import cards from "../src/assets/cards"
import Sidebar from "../src/components/Sidebar"


function App() {
  const [isActive, setIsActive] = useState(1);

  function nextCard(){
    if(isActive === cards.length){
      setIsActive(1);
    }
    else{
      setIsActive(isActive + 1);
    }
  }



  function previousCard(){
    if(isActive === 1){
      setIsActive(cards.length)
    }
    else{
      setIsActive(isActive - 1);
    }
  }

  const displayCard = cards.map(card => {
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
      <Sidebar />
      <Topbar
        length={cards.length}
        activeCard = {isActive}
      />
      {displayCard}
    </>
  )
}

export default App
