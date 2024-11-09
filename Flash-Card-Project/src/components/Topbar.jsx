
function Topbar(props){
    const innerRectangleLength = {
        width: `${((props.activeCard-1)/props.length)*100}%`
    };
    return(
        <>
            <h1 className="title">Flash Cards</h1>
            <div className="progress-bar">
                <div className="inner-rectangle" style={innerRectangleLength}> 
                    <span className="percentage"></span>
                </div>
                <span className="number-of-card-played">{`${props.activeCard} of ${props.length}`}</span>
            </div>
        </>
    )
}


export default Topbar;