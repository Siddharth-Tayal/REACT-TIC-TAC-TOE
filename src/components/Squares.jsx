import React from 'react'
import "../App.css"
const squares = (props) => {
    return <div className='squares' data-aos="flip-right" data-aos-duration="2000" onClick={props.onClick}  >{props.value === null ? "" : props.value}</div>

}

export default squares;