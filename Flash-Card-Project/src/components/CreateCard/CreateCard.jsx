import "./CreateCard.css"
import CardInput from "./CardInput"
import {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function CreateCard(props){

    const [childComponentCard, setComponentChildCard] = useState(props.deck);

    function updateToParent(updatedCard) {
        setComponentChildCard(prevCards => {
            return prevCards.map(card =>
                card.id === updatedCard.id ? updatedCard : card
            );
        });
    }
    function matchCard(){
        setComponentChildCard(prevState=>{
            return([
                ...prevState,
                {frontText: "",
                 backText: "",
                 id: prevState.length + 1
                }
            ])
        })
    }
    const displayInputCard = props.deck.map(card=>{
        return(
            <CardInput 
                key={card.id}
                num={card.id}
                front={card.frontText}
                back={card.backText}
                updateToParent = {updateToParent}  
            />
        )
    })
    

    return(
        <>
            <h1 className="title center"> Edit existing flashcard set</h1>
            <FontAwesomeIcon icon={faCaretDown} />
            
            <form>
                {/*to  be implemented */}
                {/* <label className="title-label" htmlFor = "title">Flashcard Title</label>
                <input type="text" id="title" className ="flashcard-title-input" name="title" />
                <label className="description-label" htmlFor = "description">Flashcard Description</label>
                <input id="description" className = "flashcard-description-input"/> */}
                
                {displayInputCard}
                <button className="add-button" onClick={
                    (event)=>{
                        props.addNewcard(event);
                        matchCard()
                    }
                    }>
                        <span>Add A Card</span>
                </button>
                <button className="save-button" onClick={
                    (event)=>{
                        props.save(childComponentCard, event)
                    }
                }>Save</button>
            </form>
        </>
    )
}


export default CreateCard