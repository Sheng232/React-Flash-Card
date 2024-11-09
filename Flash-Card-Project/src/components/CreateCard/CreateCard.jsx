import "./CreateCard.css"
import CardInput from "./CardInput"
function CreateCard(){


    return(
        <>
            <h1 className="title"> Edit existing flashcard set</h1>
            <form>
                <label className="title-label" htmlFor = "title">Flashcard Title</label>
                <input type="text" className ="flashcard-title-input" name="title" />
                <label className="description-label" htmlFor = "description">Flashcard Description</label>
                <input className = "flashcard-description-input"/>
                <CardInput />
            </form>
        </>
    )
}


export default CreateCard