import React from 'react'
import vacaySpots from "./vacaySpots.data"
function Vacay(props) {
    return (
        <div>
            <h1>place={vacaySpots.place}</h1>
            <p>price={vacaySpots.price}</p>
            <h2>timeToGo={vacaySpots.timeToGo}</h2>
            </div>

    )
}
export default Vacay