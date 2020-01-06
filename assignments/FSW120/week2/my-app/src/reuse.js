import React from 'react'

function Reuse(props) {
    return (
        <div style={{backgroundColor: "gray"}}>
            <h1>{props.text1}</h1>
            <h2>{props.text2}</h2>
            <p>{props.text3}</p>
        </div>
        
    )
}
export default Reuse

