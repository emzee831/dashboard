import React from 'react'

function sentiment(props) {
    return (
        <div id="analysis">
            <h2>Sentiment </h2>
        <h3>{props.sentiment1}</h3>
        <h4>{props.sentiment2}</h4>
        <h5>{props.sentiment3}</h5>

        </div>
    )
}

export default sentiment
