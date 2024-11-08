
function Navbar(){
    return(
        <>
            <h1 className="title">Flash Cards</h1>
            <div className="progress-bar">
                <div className="inner-rectangle"> 
                    <span className="percentage">25%</span>
                </div>
                <span className="number-of-card-played">5 of 20</span>
            </div>
        </>
    )
}


export default Navbar;