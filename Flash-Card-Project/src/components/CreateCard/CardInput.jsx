import "./CreateCard.css"
export default function CardInput(){
    return(
        <>
            <div className="question-input">
                <div className="input-num">1.</div>  
                <textarea className="question"></textarea>  
                <textarea className="answer"></textarea>  
            </div>
        </>
    )
}