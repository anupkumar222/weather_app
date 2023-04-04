import React from "react";


const TempApp = () => {
    return(
        <>
        <div className="box container">
        <div className="inputData">
            <input 
            type="search"
            className="inputField"
            />
        </div>
        <div className="info">
            <h2 className="location">siwan</h2>
            <i class="fa-solid fa-street-view"></i>
        <h1 className="temp"></h1>
        <h3 className="temp_min_max">Min | Max</h3>
        </div>
        </div>
        </>
    )
}

export default TempApp