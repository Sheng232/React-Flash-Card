import React from "react"

function Flashcard(props){
    const [isFront, setIsFront] = React.useState(true);
    function flipCard(){
        setIsFront(prevState =>{
            return !prevState;
        })
    }
    return(
        <div className={`container flexbox ${props.isActive}`}>
            <div className="flashcard flexbox">
                <p className={`front-text ${!isFront ? "invisible" : ""}`}>{props.frontText}</p>
                <p className={`back-text ${isFront ? "invisible" : ""}`}>{props.backText}</p>
            </div>
            <div className="inputs">
                <button className="previous" onClick={props.previousCard}>Previous</button>
                <button className="show-answer" onClick={flipCard}>{isFront ? "Show Answer" : "Hide Answer"}</button>
                <button className="next" onClick={props.nextCard}>Next</button>
            </div>
        </div>
    )
}

export default Flashcard