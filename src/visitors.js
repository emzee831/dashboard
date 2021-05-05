import React from 'react'

function visitors(props) {
    return (
            <div id="innervisitors">
            <h2>Website Visitors</h2>
            <h3>{props.visitors}</h3>
            </div>
    )
}

export default visitors
